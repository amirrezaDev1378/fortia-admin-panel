import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Chats from './Chats';
import StoryBookProvider from "@/../.storybook/provider";

export default {
    title: 'Dashboards/Chats ',
    component: Chats,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Chats>;

const Template: ComponentStory<typeof Chats> = (args) => <StoryBookProvider><Chats {...args} /> </StoryBookProvider>;

type ProductArgTypes ={
    args:React.ComponentProps<typeof Chats>
}
export const ProductArg:ProductArgTypes = Template.bind({});

ProductArg.args = {
    label: 'Chats',

};
