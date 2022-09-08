import React, {FC} from 'react';
import {Alert} from "@mui/material";
import {Warning} from "@mui/icons-material";
type FormError ={
    error: string
}
const FormError:FC<FormError> = ({error}) => {
    return (
        <Alert icon={<Warning color={"error"} />} color={"error"} severity={"error"}>
            {error}
        </Alert>
    );
};

export default FormError;
