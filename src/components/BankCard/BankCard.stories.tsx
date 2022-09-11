import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import BankCard from './BankCard';
import StoryBookProvider from "../../../.storybook/provider";
import {BsBank} from "react-icons/all";

export default {
    title: 'Component/BankCard ',
    component: BankCard,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof BankCard>;

const Template: ComponentStory<typeof BankCard> = (args) => <StoryBookProvider><BankCard {...args} /> </StoryBookProvider>;

type ProductArgTypes ={
    args:React.ComponentProps<typeof BankCard>
}
export const ProductArg:ProductArgTypes = Template.bind({});

ProductArg.args = {
    color: "rgba(241,76,76,0.87)",
    title: "test title",
    number: "5022 **** **** 2015",
    name: "john doe",
    date: "11 / 23",
    icon: <BsBank size={30}/>

};
