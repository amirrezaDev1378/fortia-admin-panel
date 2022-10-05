import React from 'react';
import {Grid} from "@mui/material";
import {For, Show} from "react-haiku";
import BankCard from "@components/BankCard/BankCard";
import {BsBank2} from "react-icons/all";
import CreateBankCard from "@components/CreateBankCard/CreateBankCard";
import {useKeenSlider} from "keen-slider/react";
import {getCards} from "@/services/cards/getCards";
import ContainerLoading from "@containers/layout/Loading";

const BankCards = () => {
    const [ref, iRef] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 2.5,
            spacing: 10,
            origin: "auto"
        }
    })
    const {data, isLoading, error, hasError, hasNoCards} = getCards();

    return (
        <Show>
            <Show.When isTrue={isLoading && !hasError}>
                <ContainerLoading/>
            </Show.When>
            <Show.When isTrue={hasError}>
                <div>
                    An error occurred
                </div>
            </Show.When>
            <Show.When isTrue={hasNoCards}>
                <div>
                    You don't have any cards
                    how about you create one?
                </div>
                <CreateBankCard />
            </Show.When>
            <Show.Else>
                <Grid item gap={2} xs={10} flexDirection={"row"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexWrap={"nowrap"}>
                    <Grid className={"keen-slider"} ref={ref} container item flexDirection={"row"} display={"flex"} flexWrap={"nowrap"}>
                        <For each={data} render={(item, i) => {
                            const {expireDate, cardNumber, ownerName, bankName , color} = item.attributes;
                            return <BankCard
                                className={"keen-slider__slide"}
                                key={i}
                                date={expireDate}
                                number={cardNumber}
                                color={color}
                                name={ownerName}
                                icon={<BsBank2/>}
                                title={bankName}
                            />
                        }}/>
                    </Grid>
                    <CreateBankCard/>
                </Grid>
            </Show.Else>

        </Show>
    );
};

export default BankCards;
