import React, {FC} from 'react';
import styles from "./Financial.module.scss";
import DashboardContainer from "@containers/layout/DashboardContainer/DashboardContainer";
import {Stack} from "@mui/material";
import BankCard from "@components/BankCard/BankCard";
import {BsBank2} from "react-icons/all";
import {getCards} from "@/services/getCards";

export interface FinancialProps {

}

const Financial: FC<FinancialProps> = (props) => {

    const {data, isLoading, error, hasError} = getCards();

    console.log({data, isLoading, error, hasError})

    return (
        <DashboardContainer>
            {isLoading ? <div>Loading...</div> :
                <Stack direction={"row"}>
                    <BankCard date={""} number={""} color={"red"} name={""} icon={<BsBank2/>} title={""}/>
                </Stack>
            }
        </DashboardContainer>
    );
};

export default Financial;
