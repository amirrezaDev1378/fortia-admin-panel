import React from 'react';
import BalanceData from "@containers/Balance/BalanceData";
import BalanceChart from "@containers/Balance/BalanceChart";
import {Grid} from "@mui/material";

const Balance = () => {


    return (
        <Grid md={5} xs={12} container item className={"section-white d-flex width-xs-default flex-nowrap flex-md-wrap"} alignItems={"center"} flexDirection={"column"} justifyContent={"center"}>
            <BalanceData/>
            <BalanceChart/>
        </Grid>

    );
};

export default Balance;
