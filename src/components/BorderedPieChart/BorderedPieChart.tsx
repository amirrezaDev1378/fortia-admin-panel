import React, {FC} from 'react';
import {Cell, Pie, PieChart, Tooltip} from 'recharts';
import styles from "./BorderedPieChart.module.scss";

export interface BorderedPieChartProps {
    data: {
        name: string,
        value: number,
        color?: string
    }[],
    tooltip?: boolean
}

const BorderedPieChart: FC<BorderedPieChartProps> = ({data, tooltip}) => {
    const defaultColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
        <div>
            <PieChart width={800} height={400}>
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
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
    tooltip: false
}
