import {useLayoutEffect} from "react";
import anime, {AnimeInstance} from "animejs";
import styles from "./Menu.module.scss"

export const menuAnimation = () => {
    let animeInstance: AnimeInstance = null;
    let arrowAnimeInstance: AnimeInstance = null;
    let isFirst = true;
    useLayoutEffect(() => {
        animeInstance = anime({
            targets: `.${styles.text}`,
            opacity: [0, 1],
            width: [0, 200],
            delay: anime.stagger(200),
            autoplay: false,
            duration: 600,
            easing: "easeInOutCubic",
        });

        arrowAnimeInstance = anime({
            targets: `#menuArrow`,
            rotate: [0, 180],
            duration: 700,
            autoplay: false,
        })
    })
    const mouseEnterHandler = () => {
        animeInstance.pause();
        if (animeInstance.direction === "reverse") {
            animeInstance.reverse();
        }
        animeInstance.play()
    }
    const mouseLeaveHandler = () => {
        animeInstance.pause();
        animeInstance.reverse()
        animeInstance.play()
    }

    const clickHandler = () => {
        if (isFirst) {
            arrowAnimeInstance.pause();
            arrowAnimeInstance.play();
            animeInstance.pause();
            animeInstance.play();
            isFirst = false;
        } else {
            arrowAnimeInstance.pause();
            arrowAnimeInstance.reverse();
            arrowAnimeInstance.play();
            animeInstance.pause()
            animeInstance.reverse();
            animeInstance.play();
        }
    }
    return {mouseEnterHandler, mouseLeaveHandler, clickHandler}
}
