import React from 'react';
import BalanceData from "@containers/Balance/BalanceData";
import BalanceChart from "@containers/Balance/BalanceChart";
import {Grid} from "@mui/material";

const Balance = () => {


    return (
        <Grid md={5} container item className={"section-white d-flex"} alignItems={"center"} justifyContent={"center"}>
            <BalanceData/>
            <BalanceChart/>
        </Grid>

    );
};

export default Balance;
