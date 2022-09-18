import React, {FC} from 'react';
import styles from "./Financial.module.scss";
import DashboardContainer from "@containers/layout/DashboardContainer/DashboardContainer";
import {Grid, Stack} from "@mui/material";
import BankCard from "@components/BankCard/BankCard";
import {BsBank2} from "react-icons/all";
import {getCards} from "@/services/cards/getCards";
import {For, Show} from 'react-haiku';
import Errors from "@containers/Dashboards/Financial/errors";
import CreateBankCard from "@components/CreateBankCard/CreateBankCard";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
export interface FinancialProps {

}

const Financial: FC<FinancialProps> = (props) => {

    const {data, isLoading, error, hasError, hasNoCards} = getCards();

    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 2,
            spacing: 20,
            origin:"center"
        }

    })

    return (
        <DashboardContainer>
            <Show>
                <Show.When isTrue={isLoading || hasError || hasNoCards}>
                    <Errors isLoading={isLoading} hasError={hasError} hasNoCards={hasNoCards}/>
                </Show.When>


                <Show.Else>
                    <Grid container className={styles.Financial}>
                        <Grid xs={8} className={"keen-slider"} ref={ref} container item flexDirection={"row"} display={"flex"} gap={1} flexWrap={"nowrap"}>
                            <For each={data} render={(item, i) => {
                                return <BankCard
                                    className={"keen-slider__slide"}
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
                        <Show.When isTrue={!hasError && !isLoading}>
                            <CreateBankCard/>
                        </Show.When>
                    </Grid>

                </Show.Else>
            </Show>

        </DashboardContainer>
    );
};

export default Financial;
