import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import TemplateName from './TemplateName';
import StoryBookProvider from "../../../.storybook/provider";

export default {
    title: 'Component/TemplateName ',
    component: TemplateName,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TemplateName>;

const Template: ComponentStory<typeof TemplateName> = (args) => <StoryBookProvider><TemplateName {...args} /> </StoryBookProvider>;

export const ProductArg = Template.bind({});

ProductArg.args = {
    label: 'TemplateName',

};
