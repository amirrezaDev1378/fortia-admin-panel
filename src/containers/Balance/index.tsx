import React, {useState} from 'react';
import BalanceData from "@containers/Balance/BalanceData";
import BalanceChart from "@containers/Balance/BalanceChart";

const Balance = () => {


    return (
        <>
            <BalanceData/>
            <BalanceChart/>
        </>

    );
};

export default Balance;
