import React, {FC} from 'react';
import {BorderedPieChartProps} from "@components/BorderedPieChart/BorderedPieChart";
import {Typography} from "@mui/material";

type Props = {
    data: BorderedPieChartProps["data"];
}
const MapAssets: FC<Props> = ({data}) => {

    return (
        <div className="my-3 d-flex flex-md-row flex-column justify-content-center align-items-center">
            {
                data.map((item, i) => {
                    return (
                        <Typography
                            key={i}
                            component={"div"}
                            className="mx-lg-3 mx-sm-1 d-flex flex-row"
                            fontFamily={"Poppins"}
                            fontSize={{lg: "1.1rem", sm: "0.9rem"}}
                        >
                            <div className="p-2 m-1 me-2 rounded-3 " style={{backgroundColor: item.color}}/>

                            {item.name} {"->"} {item.value}
                        </Typography>

                    )
                })
            }
        </div>
    );
};

export default MapAssets;
