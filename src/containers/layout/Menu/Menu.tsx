import React, {FC, useEffect, useState} from 'react';
import styles from "./Menu.module.scss";
import {Button, IconButton, Stack, Typography} from "@mui/material";
import Link from "next/link";
import anime from 'animejs';
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";

export type item = {
    name: string,
    link: string,
    icon: React.ReactNode,
    isActive?: boolean
}

export interface MenuProps {
    items: item[]
}

const MenuItem: FC<{ item }> = ({item}) => {
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
    let animeInstance: anime.AnimeInstance;
    let arrowAnimeInstance: anime.AnimeInstance;

    useEffect(() => {
        animeInstance = anime({
            targets: `.${styles.text}`,
            easing: 'easeInOutSine',
            direction: "normal",
            delay: (el, i) => i * 100,
            autoplay: false,
            width: [0, 200],
            duration: 500,
            paddingLeft: [0, 25],
            opacity: [0, 1],

        });
        arrowAnimeInstance = anime({
            targets: `#menuArrow`,
            easing: 'easeInOutSine',
            direction: "normal",
            autoplay: false,
            duration: 300,
            rotate: ["0deg", "180deg"],

        });


    }, []);


    const mouseEnterHandler = (e) => {
        (animeInstance.direction !== "normal") && animeInstance.reverse();
        animeInstance.play();
    }
    const mouseLeaveHandler = (e) => {

        animeInstance.reverse();
        animeInstance.play()

    }

    let isFirstClick = true;
    const clickHandler = (e) => {
        e.preventDefault();
        if (isFirstClick) {
            isFirstClick = false;
            animeInstance.play();
            arrowAnimeInstance.play();
            return;
        }
        animeInstance.reverse();
        arrowAnimeInstance.reverse();

        animeInstance.play();
        arrowAnimeInstance.play();

    }

    return (
        <Stack className={styles.MenuContainer}
               onMouseLeave={mouseLeaveHandler}
               onMouseEnter={mouseEnterHandler}
               alignItems={"start"}
               direction={"column"}
               spacing={1}

        >

            <IconButton className={"d-md-none"} onClick={clickHandler}>
                <ArrowForwardIos id={"menuArrow"} />
            </IconButton>
            {
                items.map((item, i) => {
                    return <MenuItem item={item} key={i}/>
                })
            }



        </Stack>
    );
};

export default Menu;
