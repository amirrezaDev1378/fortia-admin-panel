import React from 'react';
import {Skeleton} from "@mui/material";

const ContainerLoading = () => {
    return (
        <div>
            <Skeleton variant="rectangular" width={100} height={100}/>
        </div>
    );
};

export default ContainerLoading;
