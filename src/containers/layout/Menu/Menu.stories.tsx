import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Menu from './Menu';
import StoryBookProvider from "../../../../.storybook/provider";
import {AccountBalanceOutlined, DownloadOutlined, Home, Phone, PictureAsPdfOutlined, VerifiedUserOutlined} from "@mui/icons-material";

export default {
    title: 'Layout/Menu ',
    component: Menu,
    argTypes: {
    },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <StoryBookProvider><Menu {...args} /> </StoryBookProvider>;

type ProductArgTypes = {
    args: React.ComponentProps<typeof Menu>
}
export const ProductArg: ProductArgTypes = Template.bind({});

const items = [
    {name: 'Home', link: '/', icon: <VerifiedUserOutlined/> , isActive: true},
    {name: 'About', link: '/about', icon: <DownloadOutlined/>},
    {name: 'Contact', link: '/contact', icon: <PictureAsPdfOutlined/>},

]

ProductArg.args = {
    items,
};
