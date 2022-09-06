import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import SimpleBarChart from './SimpleBarChart';
import StoryBookProvider from "../../../.storybook/provider";

export default {
    title: 'Component/Charts/SimpleBarChart ',
    component: SimpleBarChart,
    argTypes: {},
} as ComponentMeta<typeof SimpleBarChart>;

const Template: ComponentStory<typeof SimpleBarChart> = (args) => <StoryBookProvider><SimpleBarChart {...args} /> </StoryBookProvider>;

export const ProductArg = Template.bind({});

let data = [];

for (let i = 0; i < 8; i++) {
    data.push({
        name: `group : ${i}`,
        value: Math.round(Math.random() * 1000)
    })
}

ProductArg.args = {
    data,
    tooltip: true,
};
