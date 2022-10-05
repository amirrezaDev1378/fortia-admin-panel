import {ServerConfig} from "@/config/server/server";
import useSWR from "swr";
import {swrFetcher} from "@/config/adaptor/swrFetcher";

export type Types = () => {
    chartData: {
        value: number,
        name: string,
    }[],
    isLoadingChartData: boolean,
    chartDataHasError: boolean,
    hasNoRecords: boolean,
    chartMutate: any
};


export const getChartData: Types = () => {
    const url = ServerConfig.routes.credit.getChartData;
    const {data, error, mutate} = useSWR(url, swrFetcher)
    let chartData;
    if (data?.data?.length > 0) {

        chartData = data.data.map((item: any) => {
            return {
                value: item,
                name: undefined
            }
        })
    }

    return {
        chartData,
        isLoadingChartData: !error && !data,
        chartDataHasError: !!error,
        hasNoRecords: !error && data?.data?.length === 0,
        chartMutate: mutate
    }
}
