import {detectTouchDevice} from "@utils/helpers/detectTouchDevice";
import anime from "animejs";

export const cardHoverAnimation = (items: HTMLElement[]) => {
    console.log(items)
    const hasTouch = detectTouchDevice();
    if (hasTouch) return;
    items.forEach((item) =>
        item.addEventListener("mouseenter", (e) => {
            const x = e.clientX/20
            const y = e.clientY/20
            const animation =anime({
                targets: item,
                scale: 1.01,

            })

        })
    )

}
