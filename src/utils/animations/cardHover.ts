import {detectTouchDevice} from "@utils/helpers/detectTouchDevice";
import anime from "animejs";

export const cardHoverAnimation = (items: HTMLElement[]) => {
    const hasTouch = detectTouchDevice();
    if (hasTouch) return;
    console.log(items)

    items.forEach((item) => {
            item.addEventListener("mouseenter", (e) => {
                anime({
                    targets: item,
                    scale: 1.01,
                    margin: 10,
                })
            })
            item.addEventListener("mouseleave", (e) => {
                anime({
                    targets: item,
                    scale: 1,
                    margin: 0,
                })
            })
        }
    )

}
