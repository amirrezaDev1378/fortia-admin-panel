import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import ContainedPieChart from './ContainedPieChart';
import StoryBookProvider from "../../../.storybook/provider";

export default {
    title: 'Component/Charts/ContainedPieChart ',
    component: ContainedPieChart,
} as ComponentMeta<typeof ContainedPieChart>;

const Template: ComponentStory<typeof ContainedPieChart> = (args) => <StoryBookProvider><ContainedPieChart {...args} /> </StoryBookProvider>;

export const ProductArg = Template.bind({});

const dummyData = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300, color: "#333"},
    {name: 'Group D', value: 200},
]

ProductArg.args = {
    data: dummyData,
    noLabel:true

};
