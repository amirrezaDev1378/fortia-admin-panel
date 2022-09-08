import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Signup from './Signup';
import StoryBookProvider from "../../../.storybook/provider";

export default {
    title: 'Pages/Signup ',
    component: Signup,
    parameters:{
        controls:{
            // I'm disabling  controls
            exclude:/.*/g
        }
    }

} as ComponentMeta<typeof Signup>;

const Template: ComponentStory<typeof Signup> = (args) => <StoryBookProvider><Signup {...args} /> </StoryBookProvider>;

type ProductArgTypes = {
    args: React.ComponentProps<typeof Signup>
}
export const ProductArg: ProductArgTypes = Template.bind({});

ProductArg.args = {
    label: 'Login',

};
