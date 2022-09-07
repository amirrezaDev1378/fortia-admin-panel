import React, {FC} from 'react';
import styles from "./Form.module.scss";
import {useForm} from "react-hook-form";
import {JSXElement} from "@babel/types";
import {yupResolver} from "@hookform/resolvers/yup";
import {Grid, Stack} from "@mui/material";
import FormChildren from "@components/Form/FormChildren";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export type FormConfig = {
    showError: boolean
}

export interface FormProps {
    children: React.ReactNode[] | React.ReactNode;
    onSubmit: (data, e) => void,
    schema: any;
    config?: FormConfig
}


const Form: FC<FormProps> = ({onSubmit, children, schema, ...props}) => {
    const {register,control, handleSubmit, watch, formState: {errors, isSubmitting, isSubmitSuccessful }} = useForm({
        mode: "all",
        resolver: yupResolver(schema)
    });
    console.log({errors})

    const submitHandler = (e) => {
        e.preventDefault();
        handleSubmit(onSubmit)(e)
        toast("submit succeeded", {
            type: "success",
            position: "bottom-left"
        })
    }
    return (
        <form onSubmit={submitHandler}>
            <Grid xs={4} item container direction={"column"} gap={2}>
                <FormChildren register={register} errors={errors} children={children}/>
                <ToastContainer/>
            </Grid>
        </form>
    );
};

export default Form;

Form.defaultProps = {
    config: {
        showError: true
    }
}
