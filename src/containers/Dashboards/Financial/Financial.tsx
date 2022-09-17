import React, {FC} from 'react';
import styles from "./Financial.module.scss";
import DashboardContainer from "@containers/layout/DashboardContainer/DashboardContainer";
import {Grid, Stack} from "@mui/material";
import BankCard from "@components/BankCard/BankCard";
import {BsBank2} from "react-icons/all";
import {getCards} from "@/services/getCards";
import {For, Show} from 'react-haiku';
import Errors from "@containers/Dashboards/Financial/errors";

export interface FinancialProps {

}

const Financial: FC<FinancialProps> = (props) => {

    const {data, isLoading, error, hasError, hasNoCards} = getCards();

    console.log({data, isLoading, error, hasError, hasNoCards})

    return (
        <DashboardContainer>
            <Show>
                <Show.When isTrue={isLoading || hasNoCards || hasNoCards}>
                    <Errors isLoading={isLoading} hasError={hasError} hasNoCards={hasNoCards}/>
                </Show.When>

                <Show.Else>
                    <Grid container item flexDirection={"row"} display={"flex"} gap={1}>
                        <For each={data} render={(item, i) => {
                            return <BankCard
                                key={i}
                                date={item.expireDate}
                                number={item.cardNumber}
                                color={"red"}
                                name={item.ownerName}
                                icon={<BsBank2/>}
                                title={item.bankName}
                            />
                        }}/>
                    </Grid>
                </Show.Else>
            </Show>

        </DashboardContainer>
    );
};

export default Financial;
