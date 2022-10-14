import React, {FC} from 'react';
import {Grid, Stack, Typography} from "@mui/material";
import {getAssetsChartData} from "@/services/assets/getAssetsChartData";
import BorderedPieChart from "@components/BorderedPieChart/BorderedPieChart";
import {Show} from 'react-haiku';
import MapAssets from "@containers/Assets/mapAssets";
import {addColorToData} from "@containers/Assets/addColorToData";

function ss() {
    const ssd = "mmo"
    console.log(this)
}

ss()

const Assets: FC = (props) => {
    const {data, hasError, isLoading} = getAssetsChartData()
    let colorizedData;
    if (!!data?.length) {
        colorizedData = addColorToData(data)
    }

    return (
        <Show>
            <Show.When isTrue={isLoading}>
                Still loading...
            </Show.When>
            <Show.When isTrue={hasError}>
                An error occurred
            </Show.When>
            <Show.Else>
                <Grid container item xs={12} flexDirection={"column"} alignItems={"center"} className={"section-white height-fit"}>
                    <Typography variant={"h3"}>
                        Assets
                    </Typography>
                    <MapAssets data={colorizedData}/>
                    <BorderedPieChart size={{width: 160, height: 160}} tooltip={true} data={colorizedData}/>
                </Grid>
            </Show.Else>

        </Show>

    );
};

export default Assets;
