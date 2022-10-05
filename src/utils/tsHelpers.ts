import {styled} from "@mui/system";
import Grid from "@mui/material/Grid";
import {ReactNode} from "react";
import {CollectionTypeSchema} from "@strapi/strapi";

export type Overwrite<Base, Overrides> = Omit<Base, keyof Overrides> & Overrides;


export type GetStrapiRequest<T extends CollectionTypeSchema> = {
    data: T["attributes"];
}
