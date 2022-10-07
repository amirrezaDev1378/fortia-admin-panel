import React, {FC} from 'react';
import {Cell, Pie, PieChart, Tooltip} from 'recharts';
import styles from "./BorderedPieChart.module.scss";

export interface BorderedPieChartProps {
    data: {
        name: string,
        value: number,
        color?: string
    }[],
    tooltip?: boolean,
    size?: { width: number, height: number }
    PieChartProps?: React.ComponentPropsWithoutRef<typeof PieChart>
    PieProps?: React.ComponentPropsWithoutRef<typeof Pie>
}

const BorderedPieChart: FC<BorderedPieChartProps> = ({data, tooltip, size, PieChartProps, PieProps}) => {
    const defaultColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const PieConfig = {
        innerRadius: 60,
        outerRadius: 80,
        fill: "#8884d8",
        paddingAngle: 5,
        dataKey: "value",
        ...PieProps,
        data: data,
    }
    const PieChartConfig = {
        ...size,
        ...PieChartProps,
    }
    return (

        <div>
            <PieChart {...PieChartConfig} >
                <Pie
                    {...PieConfig}
                >
                    {data.map((item, index) => {
                        const color = item.color || defaultColors[index % defaultColors.length];
                        return (
                            <Cell key={`cell-${index}`} fill={color}/>
                        )
                    })}
                </Pie>
                {tooltip && <Tooltip/>}
            </PieChart>
        </div>
    );
};

export default BorderedPieChart;


BorderedPieChart.defaultProps = {
    tooltip: false,
    size: {width: 400, height: 400}
}
