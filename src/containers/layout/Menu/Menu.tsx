import React, {FC, useLayoutEffect, useState} from 'react';
import styles from "./Menu.module.scss";
import {Button, IconButton, Stack, Typography} from "@mui/material";
import Link from "next/link";
import {ArrowForwardIos} from "@mui/icons-material";
import anime, {AnimeInstance} from "animejs";
import {menuAnimation} from "./menuAnimation";

export type item = {
    name: string,
    link: string,
    icon: React.ReactNode,
    isActive?: boolean,
}

export interface MenuProps {
    items: item[]
}

const MenuItem: FC<{ item: item }> = ({item}) => {
    const buttonClasses = item.isActive ? styles.active : styles.deActive;
    return (
        <Stack className={`my-2 ${styles.MenuItem}`} alignItems={"center"} direction={"row"}>
            <Link href={item.link}>
                <Button className={`d-flex justify-content-start align-items-center min-none p-2 ${buttonClasses}`} variant={"text"}>
                    {item.icon}
                    <Typography className={styles.text} variant={"h4"}>
                        {item.name}
                    </Typography>
                </Button>
            </Link>
        </Stack>
    )
}

const Menu: FC<MenuProps> = ({items}) => {
    const {mouseEnterHandler , mouseLeaveHandler , clickHandler} = menuAnimation();

    return (

        <Stack className={styles.MenuContainer}

               alignItems={"start"}
               direction={"column"}
               spacing={1}
               onMouseEnter={mouseEnterHandler}
               onMouseLeave={mouseLeaveHandler}
        >

            <IconButton onClick={clickHandler} className={"d-md-none"}>
                <ArrowForwardIos id={"menuArrow"}/>
            </IconButton>


            {
                items.map((item, i) => {
                    return <MenuItem

                        item={item}
                        key={i}
                    />
                })
            }


        </Stack>
    );
};

export default Menu;
