import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Menu from './Menu';
import StoryBookProvider from "../../../../.storybook/provider";
import { PictureAsPdfOutlined} from "@mui/icons-material";
import {AiOutlineDashboard, FaMoneyCheckAlt} from "react-icons/all";

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
    {name: 'Dashboard', link: '/', icon: <AiOutlineDashboard/> , isActive: true},
    {name: 'Financial', link: '/about', icon: <FaMoneyCheckAlt/>},
    {name: 'Contact', link: '/contact', icon: <PictureAsPdfOutlined/>},

]

ProductArg.args = {
    items,
};
