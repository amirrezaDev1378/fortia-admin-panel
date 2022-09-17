import React, {FC} from 'react';
import styles from "./BankCard.module.scss";
import {Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/system";
import CSS from 'csstype';
import {ServerContext} from "@/config/server/server";

export interface BankCardProps {
    title: string;
    number: string;
    name: string;
    date: string;
    color: "glass" | string;
    icon: React.ReactNode;
    sizes?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
    }

}

const BankCard: FC<BankCardProps> = (props) => {

    const {title, number, name, date, color, icon, sizes} = props;
    console.log(sizes)
    let mainClasses = [styles.BankCard];
    color === "glass" && mainClasses.push(styles.Glass);

    const StyledCard: typeof Grid = styled(Grid)(({theme}): any => {
        return ({
            backgroundColor: color !== "glass" && color,
        }) as CSS.Properties
    });

    return (
        <StyledCard  item container className={` ${mainClasses.join(" ")}`} flexDirection={"column"} {...sizes}>
            <Typography variant={"h4"}>{title}</Typography>
            <Typography mt={4} variant={"subtitle1"}>{name}</Typography>
            <Typography mt={1} variant={"h5"}>{number}</Typography>
            <Stack mt={2} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Typography fontFamily={"Poppins Light"} variant={"h6"}>{date}</Typography>
                {icon}
            </Stack>
        </StyledCard>
    );
};

export default BankCard;

BankCard.defaultProps = {
    sizes: {
        xs: 10,
        md: 4,
    }
}

// TODO add animations
