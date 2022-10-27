import React, {FC, useEffect} from 'react';
import styles from "./Chats.module.scss";
import {chatsSocket} from "@/services/chats";
import DashboardContainer from "@containers/layout/DashboardContainer/DashboardContainer";
import {Grid} from "@mui/material";
import AllChats from "@containers/AllChats";
import ViewChat from "@containers/ViewChat";

export interface ChatsProps {

}

const Chats: FC<ChatsProps> = (props) => {

    return (
        <DashboardContainer height={"95vh"} flexDirection={"row"}>
            <Grid className={"section-white"} container item md={3}>
                <AllChats/>
            </Grid>
            <Grid className={"section-white"} container item md={9}>
                <ViewChat chat={undefined} loading={true}/>
            </Grid>
        </DashboardContainer>
    );
};

export default Chats;
