import {BorderedPieChartProps} from "@components/BorderedPieChart/BorderedPieChart";
import {getRandomThemeColor} from "@utils/getRandomThemeColor";

export const addColorToData = (data: BorderedPieChartProps["data"]) => {
    const colors = getRandomThemeColor(data.length);
    return data.map((item, i) => {
        return {
            ...item,
            color: colors[i]
        }
    })
}
