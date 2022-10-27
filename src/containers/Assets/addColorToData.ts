import {BorderedPieChartProps} from "@components/BorderedPieChart/BorderedPieChart";
import {getRandomThemeColor} from "@utils/getRandomThemeColor";

export const addColorToData = (data: BorderedPieChartProps["data"]) => {

    const colors = getRandomThemeColor(data.length as 5);
    return data.map((item, i) => {
        return {
            ...item,
            color: colors[i]
        }
    })
}
