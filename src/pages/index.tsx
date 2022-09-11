import type {NextPage} from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import {Button} from "@mui/material";
import BankCard from "@components/BankCard/BankCard";
import {BabyChangingStation} from "@mui/icons-material";

const IndexPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <BankCard date={"22fds"} number={"sfdf"} color={"red"} name={"dfdsafs"} icon={<BabyChangingStation />} title={"dsds"} />
        </div>
    )
}

export default IndexPage
