import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import BorderedPieChart from './BorderedPieChart';
import StoryBookProvider from "../../../.storybook/provider";

export default {
    title: 'Component/Charts/BorderedPieChart ',
    component: BorderedPieChart,
    argTypes: {},
} as ComponentMeta<typeof BorderedPieChart>;

const Template: ComponentStory<typeof BorderedPieChart> = (args) => <StoryBookProvider><BorderedPieChart {...args} /> </StoryBookProvider>;

type ProductArgTypes = {
    args: React.ComponentProps<typeof BorderedPieChart>
}

export const ProductArg: ProductArgTypes = Template.bind({});
const dummyData = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300, color: "#333"},
    {name: 'Group D', value: 200},
]
ProductArg.args = {
    data: dummyData,
    tooltip: true
};
