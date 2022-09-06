import React , {FC} from 'react';
import {Line, ResponsiveContainer, LineChart as RechartLineChart, Tooltip , XAxis as RechartXAxis} from 'recharts';
import styles from "./LineChart.module.scss";
export interface LineChartProps {
    data: {
        name: string,
        value: number
    }[],
    tooltip?: boolean,
    dot?:boolean,
    XAxis?:{
        dataKey:string
    }
}
const LineChart:FC<LineChartProps> = ({data,tooltip , dot,XAxis}) => {
    return (
        <ResponsiveContainer width={300} height={300}>
            <RechartLineChart width={300} height={100} data={data}>
                <Line dot={dot} type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                {tooltip && <Tooltip />}
                {XAxis && <RechartXAxis dataKey={XAxis.dataKey} />}
            </RechartLineChart>
        </ResponsiveContainer>
    );
};

export default LineChart;

LineChart.defaultProps={
    tooltip:false,
    dot:false
}
