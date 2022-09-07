import React, {FC} from 'react';
import {Alert} from "@mui/material";
type FormError ={
    error: string
}
const FormError:FC<FormError> = ({error}) => {
    return (
        <Alert severity={"error"}>
            {error}
        </Alert>
    );
};

export default FormError;
