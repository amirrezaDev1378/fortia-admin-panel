import React, {FC} from 'react';
import styles from "./DashboardContainer.module.scss";
import Menu, {item} from "@containers/layout/Menu/Menu";
import {Grid, GridTypeMap} from "@mui/material";
import {AiOutlineDashboard, BsTelephoneForward, FaMoneyCheckAlt} from "react-icons/all";

import {DefaultComponentProps} from "@mui/types";




export interface DashboardContainerProps extends DefaultComponentProps<GridTypeMap>  {
    children: React.ReactNode | React.ReactNode[];
    config?: any;

}
const DashboardContainer: FC<DashboardContainerProps> = ({children,config, ...props}) => {
    delete props.container;
    delete props.gap;

    const dummyInfo: item[] = [
        {name: 'Dashboard', link: '/', icon: <AiOutlineDashboard size={40}/> },
        {name: 'Financial', link: '/financial', icon: <FaMoneyCheckAlt size={40}/> , isActive:true},
        {name: 'Contact', link: '/contact', icon: <BsTelephoneForward size={40}/>},
    ]

    return (
        <Grid container gap={5} {...props}>
            <Menu items={dummyInfo}/>
            {children}
        </Grid>
    );
};

export default DashboardContainer;

// get data from the store
