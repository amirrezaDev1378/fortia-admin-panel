import React, {FC, useEffect, useState} from 'react';
import {chatsSocket} from "@/services/chats";
import {Stack, Typography} from "@mui/material";
import {Show} from 'react-haiku';
import ReactJson from "react-json-view";
import {partition} from "lodash";

const AllChats: FC = () => {
    const {getAllChats} = chatsSocket.actions;
    const [AllChats, setAllChats] = useState<any>(null);
    useEffect(() => {
        getAllChats().then(({results}) => {
            console.log(partition(results, ["receiver"]))
            setAllChats(results);
        })
    }, []);


    return (
        <Stack>
            <Typography variant={"h5"}>
                All Chats
            </Typography>
            <Show>
                <Show.When isTrue={!!AllChats}>
                    dfdsf

                </Show.When>
            </Show>
        </Stack>
    );
};

export default AllChats;
