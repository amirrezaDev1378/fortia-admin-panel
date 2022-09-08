import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Login from './Login';
import StoryBookProvider from "../../../.storybook/provider";

export default {
    title: 'Pages/Login ',
    component: Login,
    parameters:{
        controls:{
            // I'm disabling  controls
            exclude:/.*/g
        }
    }

} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <StoryBookProvider><Login {...args} /> </StoryBookProvider>;

type ProductArgTypes = {
    args: React.ComponentProps<typeof Login>
}
export const ProductArg: ProductArgTypes = Template.bind({});

ProductArg.args = {
    label: 'Login',

};
