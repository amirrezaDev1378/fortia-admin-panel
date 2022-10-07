import {ApiAssetAsset} from "@/types/strapi";
import {ALLOWED_COINS} from "@/config/coins";
import {BorderedPieChartProps} from "@components/BorderedPieChart/BorderedPieChart";

export const convertToChart = (data: ApiAssetAsset["attributes"][]) => {
    console.log(data)
    if (!!data?.length) {
        let chartData: BorderedPieChartProps["data"] | undefined  = [];
        ALLOWED_COINS.forEach(coin => {
            const targetCoin = data.filter(item => item.coin_type as any === coin)
            if (targetCoin.length > 0) {
                const sum = targetCoin.reduce((acc, item) => {
                    const amount = item.type as any === "charge" ? +item.amount : -item.amount
                    return +acc + amount;
                }, 0)
                chartData.push({
                    name: coin,
                    value: +sum
                })

            }
        })
        return chartData;
    }
    return null;
}
