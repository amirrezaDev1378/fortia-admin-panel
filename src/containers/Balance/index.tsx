import React, {useState} from 'react';
import BalanceData from "@containers/Balance/BalanceData";
import BalanceChart from "@containers/Balance/BalanceChart";

const Balance = () => {


    return (
        <div className={"white-section"}>
            <BalanceData/>
            <BalanceChart/>
        </div>

    );
};

export default Balance;
