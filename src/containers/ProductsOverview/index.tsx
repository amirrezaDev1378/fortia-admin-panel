import React, {FC} from 'react';
import {Grid, Stack, Typography} from "@mui/material";
import {TbFolders} from "react-icons/all";
import Link from "next/link";

const ProductsOverview: FC = () => {
    return (
        <Grid className="section-primary mt-0" md={12}>
            <Typography color={"white"} className="d-flex flex-row justify-content-between" variant="h4">
                Products Overview
                <TbFolders className="bg-glass p-2 rounded-2" size={38}/>
            </Typography>
            <Stack mt={2} direction={"row"} justifyContent={"space-between"}>

                <Typography color={"white"} variant="body1">
                    All Products {"->"} <i>3</i>
                </Typography>

                <Typography color={"white"} variant="body1">
                    Newly added {"->"} <i>1</i>
                </Typography>
            </Stack>
            <Stack mt={2} direction={"row"} justifyContent="space-between" alignItems={"center"}>
                <Typography color={"white"} variant={"h5"}>
                    Best Selling Product
                </Typography>
                <Link href={"/products/5"}>
                    <Typography className="cursor-pointer link-warning" variant={"body1"}>
                        Sample Product
                    </Typography>
                </Link>
            </Stack>


        </Grid>
    );
};

export default ProductsOverview;
