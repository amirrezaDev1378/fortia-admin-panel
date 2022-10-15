import React from 'react';
import LineChart from "@components/LineChart/LineChart";
import {getChartData} from "@/services/credit/getChartData";
import {Show} from 'react-haiku';
import Loading from "@containers/layout/Loading";
import useSWR from "swr";

const BalanceChart: React.FC = (props) => {
    const {chartDataHasError, chartData, isLoadingChartData, chartMutate, hasNoRecords} = getChartData()
    return (
        <Show>
            <Show.When isTrue={isLoadingChartData}>
                <Loading/>
            </Show.When>
            <Show.When isTrue={chartDataHasError}>
                <div>Error Accrued</div>
            </Show.When>
            <Show.When isTrue={hasNoRecords && !chartDataHasError}>
                <div>No Records Found</div>
            </Show.When>
            <Show.Else>
                <LineChart  data={chartData} />
            </Show.Else>
        </Show>
    );
};

export default BalanceChart;
