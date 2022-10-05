import React, {FC, useState} from 'react';
import styles from "./CreateBankCard.module.scss";
import {Button, Dialog, DialogActions, DialogTitle, IconButton, TextField} from "@mui/material";
import Form from "@components/Form/Form";
import * as yup from "yup"
import {AiOutlineClose, AiOutlinePlus} from "react-icons/all";
import {createCard} from "@/services/cards/createCard";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {allowOnlyNumber} from "@utils/allowOnlyNumber";
import {Controller} from "react-hook-form";

export interface CreateBankCardProps {

}

const CreateBankCard: FC<CreateBankCardProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);


    const submitHandler = async (formData, e) => {
        const {data, hasError, error} = await createCard(formData);
        if (!hasError) {
            toast("Card Created Successfully", {
                type: "success",
                position: "bottom-left"
            })
            return;
        }
        console.log({data, hasError, error})
        toast(error?.data || "Something went wrong", {
            type: "error",
            position: "bottom-left"
        })
    }
    const closeDialog = () => {
        if (isOpen) {
            setIsOpen(false)
        }
    }
    const openDialog = () => {
        if (!isOpen) {
            setIsOpen(true)
        }
    }

    const schema = yup.object().shape({
        bankName: yup.string().required("Bank name is required").min(6, "Bank name must be at least 6 characters"),
        cardNumber: yup.string().required("Card number is required").min(12, "Card number must be at least 16 characters"),
        expireDate: yup.string().required("Expire date is required").min(4, "Expire date must be at least 5 characters"),
        ownerName: yup.string().required("Owner name is required").min(6, "Owner name must be at least 6 characters"),
    }).required()
    return (
        <>

            <div onClick={openDialog} className={styles.CreateBankCard}>
                <AiOutlinePlus size={40}/>
            </div>

            <Dialog
                classes={{
                    paper: "p-4"
                }}
                onClose={closeDialog}
                open={isOpen}
            >
                <DialogActions>
                    <IconButton onClick={closeDialog}>
                        <AiOutlineClose size={20}/>
                    </IconButton>
                </DialogActions>

                <DialogTitle className={"text-center"}>
                    Create A New Bank Card
                </DialogTitle>
                <Form onSubmit={submitHandler} schema={schema}>
                    <TextField
                        name={"bankName"}
                        label={"Bank Name"}
                        variant={"outlined"}
                    />
                    <TextField onChangeCapture={allowOnlyNumber} name={"cardNumber"} label={"Card Number"} variant={"outlined"}/>
                    <TextField name={"expireDate"} label={"Expire Date"} variant={"outlined"}/>
                    <TextField name={"ownerName"} label={"Owner Name"} variant={"outlined"}/>
                    <Button color={"info"} variant={"contained"} type={"submit"}>Submit</Button>
                </Form>
            </Dialog>
            <ToastContainer/>

        </>
    );
};

export default CreateBankCard;
