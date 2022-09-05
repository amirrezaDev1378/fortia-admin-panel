import React, {FC} from 'react';
import styles from "./ContainedPieChart.module.scss";
import {Cell, Pie, ResponsiveContainer, PieChart} from "recharts";

export interface ContainedPieChartProps {
    data: [{
        name: string,
        value: number,
        color?: string,
    }],
    noLabel?: boolean
}

const RADIAN = Math.PI / 180;
const renderCustomLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
}
const ContainedPieChart: FC<ContainedPieChartProps> = ({data, noLabel}) => {
    const defaultColors = ["#f4aa2e", "#e81212", "#4552ff", "#b562ff"]
    return (
        <ResponsiveContainer width={400} height={400}>
            <PieChart width={400} height={400}>
                <Pie

                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={noLabel ? undefined : renderCustomLabel}
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
        </ResponsiveContainer>
    );
};

export default ContainedPieChart;

ContainedPieChart.defaultProps = {
    noLabel: false
}
