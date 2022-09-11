import {styled} from "@mui/system";
import Grid from "@mui/material/Grid";
import {ReactNode} from "react";

export type Overwrite<Base, Overrides> = Omit<Base, keyof Overrides> & Overrides;


