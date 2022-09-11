import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Financial from './Financial';
import StoryBookProvider from "../../../../.storybook/provider";
import {BsBank} from "react-icons/all";

export default {
    title: 'Dashboards/Financial ',
    component: Financial,
    argTypes: {},
} as ComponentMeta<typeof Financial>;

const Template: ComponentStory<typeof Financial> = (args) => <StoryBookProvider><Financial {...args} /> </StoryBookProvider>;

type ProductArgTypes = {
    args: React.ComponentProps<typeof Financial>
}
export const ProductArg: ProductArgTypes = Template.bind({});

ProductArg.args = {
    label: "Bank Card",
};
