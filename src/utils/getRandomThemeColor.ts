import {Range} from "@utils/tsHelpers";



type types = (count: Range<1, 6>) => string[];

export const getRandomThemeColor: types = (count) => {
    let themeColors = ["#4339F2", "#FF3A29", "#FFB200", "#34B53A", "#FF8042"];

    if (count > themeColors.length) {
        throw new Error("count is greater than themeColors");
    }
    let randomColors: string[] = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * themeColors.length);
        const randomColor = themeColors[randomIndex];
        themeColors.splice(randomIndex, 1);
        randomColors.push(randomColor);
    }

    return randomColors;
}

