import React, {FC} from 'react';
import {Bar, ResponsiveContainer, BarChart, Tooltip, XAxis} from 'recharts';
import styles from "./SimpleBarChart.module.scss";

export interface SimpleBarChartProps {
    data: [{
        name: string,
        value: number
    }],
    tooltip?: boolean,
}

const SimpleBarChart: FC<SimpleBarChartProps> = ({data, tooltip}) => {
    return (
        <ResponsiveContainer width={300} height={300}>
            <BarChart width={150} height={40} data={data}>
                {tooltip && <Tooltip useTranslate3d/>}
                <XAxis hide dataKey={"name"}/>
                <Bar fill="#8884d8" dataKey={"value"}/>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default SimpleBarChart;
