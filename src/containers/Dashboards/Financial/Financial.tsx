import React, {FC} from 'react';
import styles from "./Financial.module.scss";
import DashboardContainer from "@containers/layout/DashboardContainer/DashboardContainer";
import {Grid, Stack} from "@mui/material";

import "keen-slider/keen-slider.min.css"

import BankCards from "@containers/BankCards";
import Balance from "@containers/Balance";
import Assets from "@containers/Assets";

export interface FinancialProps {

}

const Financial: FC<FinancialProps> = (props) => {


    return (
        <DashboardContainer>
            <Grid flexWrap={"nowrap"} flexDirection={"column"} display={"flex"} container className={styles.Financial}>
                <BankCards/>
                <Stack direction={{md:"row"}}  >

                    <Balance/>
                    <Assets/>
                </Stack>
            </Grid>
        </DashboardContainer>
    );
};

export default React.memo(Financial);
