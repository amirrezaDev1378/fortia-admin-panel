import type {NextPage} from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import {Button} from "@mui/material";

const IndexPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Button>
                mame
            </Button>
        </div>
    )
}

export default IndexPage
