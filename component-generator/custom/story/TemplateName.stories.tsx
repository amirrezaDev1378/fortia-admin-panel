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

type ProductArgTypes ={
    args:React.ComponentProps<typeof TemplateName>
}
export const ProductArg:ProductArgTypes = Template.bind({});

ProductArg.args = {
    label: 'TemplateName',

};
