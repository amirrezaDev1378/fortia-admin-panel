import React, {FC} from 'react';
import {Skeleton} from "@mui/material";
import styles from "./styles.module.scss"
interface props {
    chat: any,
    loading: boolean
}

const ViewChat: FC<props> = ({}) => {
    return (
        <Skeleton className={styles.viewChat}  animation={"pulse"} variant={"rounded"}>
            mimi
        </Skeleton>
    );
};

export default ViewChat;
