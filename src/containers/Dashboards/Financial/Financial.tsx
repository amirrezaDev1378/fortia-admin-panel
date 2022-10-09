import React, {FC} from 'react';
import styles from "./Financial.module.scss";
import DashboardContainer from "@containers/layout/DashboardContainer/DashboardContainer";
import {Grid, Stack} from "@mui/material";

import "keen-slider/keen-slider.min.css"

import BankCards from "@containers/BankCards";
import Balance from "@containers/Balance";
import Assets from "@containers/Assets";
import ProductsOverview from "@containers/ProductsOverview";

export interface FinancialProps {

}

const Financial: FC<FinancialProps> = (props) => {


    return (
        <DashboardContainer md={12}>
            <Grid md={12} flexWrap={"nowrap"} flexDirection={"column"} display={"flex"} container className={styles.Financial}>
                <BankCards/>
                <Grid md={12} display={"flex"} flexDirection={{md: "row"}}>
                    <Balance/>
                    <Grid container item md={7}>
                        <Assets/>
                        <ProductsOverview/>
                    </Grid>
                </Grid>
            </Grid>
        </DashboardContainer>
    );
};

export default React.memo(Financial);
