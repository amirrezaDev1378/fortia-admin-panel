import React, {FC} from 'react';
import {Stack, Typography} from "@mui/material";
import {getAssetsChartData} from "@/services/assets/getAssetsChartData";
import BorderedPieChart from "@components/BorderedPieChart/BorderedPieChart";

const Assets: FC = (props) => {
    const {data} = getAssetsChartData()
    if (!data) return <></>
    return (
        <Stack direction={"column"} className={"white-section"}>
            <Typography variant={"h3"}>
                Assets
            </Typography>
            <BorderedPieChart size={{width:160 , height:160}} tooltip={true} data={data}/>
        </Stack>
    );
};

export default Assets;
