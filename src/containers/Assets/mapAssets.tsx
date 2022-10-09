import React, {FC} from 'react';
import {BorderedPieChartProps} from "@components/BorderedPieChart/BorderedPieChart";
import {getRandomThemeColor} from "@utils/getRandomThemeColor";
import {Stack} from "@mui/material";

type Props = {
    data: BorderedPieChartProps["data"];
}
const MapAssets: FC<Props> = ({data}) => {

    return (
        <div className="my-3 d-flex flex-row justify-content-center align-items-center">
            {
                data.map((item, i) => {
                    return (
                        <Stack key={i} className="mx-3" direction={"row"}>
                            <div className="p-2 m-1 me-2 rounded-3 " style={{backgroundColor: item.color}}/>

                            {item.name} {"->"} {item.value}
                        </Stack>
                    )
                })
            }
        </div>
    );
};

export default MapAssets;
