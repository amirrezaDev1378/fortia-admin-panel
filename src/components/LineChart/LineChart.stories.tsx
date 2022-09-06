import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import LineChart from './LineChart';
import StoryBookProvider from "../../../.storybook/provider";

export default {
    title: 'Component/Charts/LineChart ',
    component: LineChart,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof LineChart>;

const Template: ComponentStory<typeof LineChart> = (args) => <StoryBookProvider><LineChart {...args} /> </StoryBookProvider>;

type ProductArgTypes = {
    args: React.ComponentProps<typeof LineChart>
}
export const ProductArg: ProductArgTypes = Template.bind({});
let data = [];

for (let i = 0; i < 8; i++) {
    data.push({
        name: `group : ${i}`,
        value: Math.round(Math.random() * 1000)
    })
}
ProductArg.args = {
    data,
    tooltip:true,
};
