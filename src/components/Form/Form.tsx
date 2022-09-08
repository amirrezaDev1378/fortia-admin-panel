import React, {FC} from 'react';
import styles from "./Form.module.scss";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Grid} from "@mui/material";
import FormChildren from "@components/Form/FormChildren";
import 'react-toastify/dist/ReactToastify.css';

export type FormConfig = {
    showError: boolean
}
export  type formSubmitHandlerType = (data: any , e:React.ChangeEvent<HTMLFormElement>) => void;

export interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
    children: React.ReactNode[] | React.ReactNode;
    onSubmit: (data, e) => void,
    schema: any;
    config?: FormConfig,

}


const Form: FC<FormProps> = ({onSubmit, children, schema, config, ...otherProps}) => {
    const {register, control, handleSubmit, watch, formState: {errors, isSubmitting, isSubmitSuccessful}} = useForm({
        mode: "all",
        resolver: yupResolver(schema)
    });

    const submitHandler = (e) => {
        e.preventDefault();
        handleSubmit(onSubmit)(e)

    }
    return (
        <form onSubmit={submitHandler} {...otherProps}>
            <Grid xs={12} item container direction={"column"} gap={2}>
                <FormChildren register={register} errors={errors} children={children}/>
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
