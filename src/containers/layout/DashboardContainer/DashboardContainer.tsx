import React, {FC} from 'react';
import styles from "./DashboardContainer.module.scss";
import Menu from "@containers/layout/Menu/Menu";
import {Grid, GridTypeMap} from "@mui/material";

import {DefaultComponentProps} from "@mui/types";
import {getMenuItems} from "@containers/layout/DashboardContainer/getMenuItems";


export interface DashboardContainerProps extends DefaultComponentProps<GridTypeMap> {
    children: React.ReactNode | React.ReactNode[];
    config?: any;

}

/**
 * container for dashboard
 * accepts Grid props except container & flexWrap
 */
const DashboardContainer: FC<DashboardContainerProps> = ({children, config, ...props}) => {
    delete props.container;
    delete props.flexWrap;
    let classNames = styles.DashboardContainer;
    if (props.className) {
        classNames = `${classNames} ${props.className}`;
    }
    const menuItems = getMenuItems();
    return (
        <Grid container className={classNames} flexWrap={"nowrap"} {...props}>
            <Menu  items={menuItems}/>
            {children}
        </Grid>
    );
};

export default DashboardContainer;

// get data from the store
