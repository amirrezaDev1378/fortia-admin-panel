import React, {FC, useEffect} from 'react';
import {Grid} from "@mui/material";
import {For, Show} from "react-haiku";
import BankCard from "@components/BankCard/BankCard";
import {BsBank2} from "react-icons/all";
import CreateBankCard from "@components/CreateBankCard/CreateBankCard";
import {useKeenSlider} from "keen-slider/react";
import {getCards} from "@/services/cards/getCards";
import ContainerLoading from "@containers/layout/Loading";
import {useAutoUpdateKeenSlider} from "@containers/BankCards/useAutoUpdateKeenSlider";
import {cardHoverAnimation} from "@utils/animations/cardHover";

const BankCards: FC = (props) => {

    const [ref, iRef] = useKeenSlider<HTMLDivElement>({
        breakpoints: {
            "(min-width: 0px)": {
                slides: {
                    perView: 1.1,
                    spacing: 7,
                    origin: "auto"
                }
            },
            "(min-width: 600px)": {
                slides: {
                    perView: 1.5,
                    spacing: 7,
                    origin: "auto"
                }
            },
            "(min-width: 900px)": {
                slides: {
                    perView: 2.5,
                    spacing: 10,
                    origin: "auto"
                }
            }
        }
    })

    useAutoUpdateKeenSlider(iRef, props)

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
                <CreateBankCard/>
            </Show.When>
            <Show.Else>

                <Grid className={"section-white width-default p-3 p-sm-4"}
                      item
                      gap={2}
                      xs={12}
                      flexDirection={{md:"row",xs:"column"}}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      flexWrap={"nowrap"}
                >
                    <Grid xs={12} className={"keen-slider"} ref={ref} container item flexDirection={"row"} display={"flex"} flexWrap={"nowrap"}>
                        <For each={data} render={(item, i) => {
                            const {expireDate, cardNumber, ownerName, bankName, color} = item.attributes;
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
