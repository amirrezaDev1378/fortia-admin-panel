import React, {FC} from 'react';
import styles from "./ContainedPieChart.module.scss";
import {Cell, Pie, ResponsiveContainer, PieChart} from "recharts";

export interface ContainedPieChartProps {
    data: {
        name: string,
        value: number,
        color?: string,
    }[],
    useLabel?: boolean
}

const RADIAN = Math.PI / 180;
const renderCustomLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}, label: string) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${label}`}
        </text>
    );
}
const ContainedPieChart: FC<ContainedPieChartProps> = ({data, useLabel}) => {
    const defaultColors = ["#f4aa2e", "#e81212", "#4552ff", "#b562ff"]
    const customLabel = (params) => {
        return renderCustomLabel(params, data[params.index].name)
    }
    return (
        <PieChart width={400} height={400}>
            <Pie

                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={useLabel ? undefined : customLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map(
                    (item, index) => {
                        const color = item.color || defaultColors[index % defaultColors.length]
                        return (
                            <Cell key={`cell-${index}`} fill={color}/>
                        )
                    }
                )}
            </Pie>
        </PieChart>
    );
};

export default ContainedPieChart;

ContainedPieChart.defaultProps = {
    useLabel: false
}
// TODO - add hover animation
