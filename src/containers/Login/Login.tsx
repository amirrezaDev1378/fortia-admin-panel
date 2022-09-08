import React, {FC, useEffect, useState} from 'react';
import styles from "./Login.module.scss";
import Form, {FormConfig, formSubmitHandlerType} from "@components/Form/Form";
import {Button, Grid, TextField} from "@mui/material";
import * as yup from "yup";
import Image from "next/image";
import {mainLogo} from "@/assets";
import {toast, ToastContainer} from "react-toastify";

export interface LoginProps {

}

const Login: FC<LoginProps> = (props) => {

    const [submitButtonText, setSubmitButtonText] = useState("submit");

    const validationSchema = yup.object({
        username: yup.string().min(6).required(),
        password: yup.string().min(6).required(),
    }).required();

    const config: FormConfig = {
        showError: true
    }
    const submitHandler: formSubmitHandlerType = async (data, e) => {
        await setSubmitButtonText("loading...");
        await new Promise((resolve) => setTimeout(resolve, 5000))
        e.target.querySelectorAll("input").forEach(e => e.value = "")
        console.log({data, e})
        toast("submit succeeded", {
            type: "success",
            position: "bottom-left"
        })
        await setSubmitButtonText("submit")
    }
    useEffect(() => {
    }, [])
    return (
        <Grid className={styles.LoginContainer} alignItems={"center"} display={"flex"} flexDirection={"column"} container>
            <div className={`${styles.Logo}`}>
                <Image src={mainLogo}/>
            </div>

            <Form className={`mt-5   ${styles.Form}`} config={config} schema={validationSchema} onSubmit={submitHandler}>
                <TextField label={"username"} placeholder={"please enter your username"} autoComplete={"off"} name="username"/>
                <TextField label={"password"} placeholder={"please enter your password"} autoComplete={"off"} name="password"/>
                <Button disabled={false} variant={"contained"} color={"success"} type={"submit"}>
                    {submitButtonText}
                </Button>
            </Form>
            <ToastContainer/>

        </Grid>
    );
};

export default Login;
