import {BankCardProps} from "@components/BankCard/BankCard";
import { BsCreditCard } from "react-icons/bs";

export const data: BankCardProps = {
    title: "Test Bank Card",
    number: "5022298535268744",
    icon:<BsCreditCard/>,
    date: "12/22",
    name: "John Doe",
    sizes: {
        xs: 10,
    },
    color: "glass",
}
