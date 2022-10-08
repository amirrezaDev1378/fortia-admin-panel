import React, {FC, useState} from 'react';
import {getCredit} from "@/services/credit/getCredit";
import * as yup from "yup";
import {charge} from "@/services/credit/charge";
import {toast} from "react-toastify";
import {withdraw} from "@/services/credit/withdraw";
import {Show} from "react-haiku";
import Loading from "@containers/layout/Loading";
import {Button, Dialog, DialogTitle, Divider, Stack, TextField, Typography} from "@mui/material";
import Form from "@components/Form/Form";
import {allowOnlyNumber} from "@utils/allowOnlyNumber";
import useSWR, {useSWRConfig} from "swr";
import {ServerConfig} from "@/config/server/server";

const BalanceData: FC = (props) => {
    const {CreditHasError, CreditData, isLoadingCreditData, CreditMutate, hasNoRecords} = getCredit();
    const {mutate: ChartMutate} = useSWRConfig()
    const mutate = async () => {
        await Promise.all([CreditMutate(), ChartMutate(ServerConfig.routes.credit.getChartData)])
    }
    const initialStates = {
        open: false, type: "", submit: (data) => {
        }
    }

    const [dialog, setDialog] = useState({...initialStates});

    const schema = yup.object().shape({
        amount: yup.number().required("Amount is required"),
    }).required()


    const creditHandler = (type: "charge" | "withdraw") => {
        setDialog({
            open: true, type: type, submit: (data) => {
                const handler = type === "charge" ? charge : withdraw;
                handler(data).then(async () => {
                    await mutate();
                    toast("Operation done successfully", {
                        type: "success"
                    })
                }).catch((e) => {
                    toast("Error while doing your request", {
                        type: "error"
                    })
                }).finally(() => {
                    setDialog({...initialStates})
                })
            }
        })
    }

    const closeModal = () => {
        setDialog({...initialStates})
    }
    const chargeHandler = () => creditHandler("charge");
    const withdrawHandler = () => creditHandler("withdraw");
    return (
        <Show>
            <Show.When isTrue={isLoadingCreditData}>
                <Loading/>
            </Show.When>
            <Show.When isTrue={CreditHasError}>
                <div>Error</div>
            </Show.When>
            <Show.Else>
                <Stack>
                    <Typography variant={"h3"}>
                        Balance
                    </Typography>
                    <Divider className="my-2"/>
                    <Stack direction={"column"} justifyContent={"space-evenly"} alignItems={"center"}>
                        <Typography variant={"h4"}>
                            Total Balance : {CreditData?.data}
                        </Typography>
                        <Stack className="w-100 mt-2" direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
                            <Button onClick={chargeHandler} variant={"contained"}>
                                Charge
                            </Button>
                            <Button onClick={withdrawHandler} variant={"outlined"}>
                                Withdraw
                            </Button>
                        </Stack>

                        <Dialog
                            open={dialog.open}
                            onClose={closeModal}
                        >
                            <DialogTitle>
                                {dialog.type}
                            </DialogTitle>
                            <Form schema={schema} onSubmit={dialog.submit}>
                                <TextField name={"amount"} onChangeCapture={allowOnlyNumber} label={"Amount"} variant={"outlined"}/>
                                <Button type={"submit"}>
                                    Submit
                                </Button>
                            </Form>
                        </Dialog>

                    </Stack>

                </Stack>
            </Show.Else>
        </Show>
    );
};

export default BalanceData;
