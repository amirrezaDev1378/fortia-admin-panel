import useSWR from 'swr'
import {ServerConfig} from "@/config/server/server";
import {ApiAssetAsset} from "@/types/strapi";
import {TypedSwrAdaptor} from "@/config/adaptor/typedSwrAdaptor";
import {convertToChart} from "@/services/assets/convertToChart";

type AssetsResponse = ApiAssetAsset["attributes"][]

export const getAssetsChartData = () => {
    const url = ServerConfig.routes.assets.getAll;

    const {data, error, mutate} = useSWR(url, TypedSwrAdaptor<AssetsResponse>)
    const chartData = convertToChart(data)
    return {
        data: chartData,
        isLoading: !error && !data,
        hasError: !!error,
        error,
        hasNoCards: !error && data?.length === 0,
        mutate
    }
}
