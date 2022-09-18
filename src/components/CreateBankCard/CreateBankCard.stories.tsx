import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import CreateBankCard from './CreateBankCard';
import StoryBookProvider from "../../../.storybook/provider";

export default {
    title: 'Component/CreateBankCard ',
    component: CreateBankCard,
    argTypes: {
    },
} as ComponentMeta<typeof CreateBankCard>;

const Template: ComponentStory<typeof CreateBankCard> = (args) => <StoryBookProvider><CreateBankCard {...args} /> </StoryBookProvider>;

type ProductArgTypes ={
    args:React.ComponentProps<typeof CreateBankCard>
}
export const ProductArg:ProductArgTypes = Template.bind({});

ProductArg.args = {

};
