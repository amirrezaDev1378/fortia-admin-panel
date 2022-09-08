import React, {FC, useEffect, useState} from 'react';
import styles from "./Signup.module.scss";
import Form, {FormConfig, formSubmitHandlerType} from "@components/Form/Form";
import {Button, Grid, TextField} from "@mui/material";
import * as yup from "yup";
import Image from "next/image";
import {mainLogo} from "@/assets";
import {toast, ToastContainer} from "react-toastify";

export interface LoginProps {

}

const Signup: FC<LoginProps> = (props) => {

    const [submitButtonText, setSubmitButtonText] = useState("submit");

    const validationSchema = yup.object({
        username: yup.string().min(6).required(),
        email: yup.string().min(6).required().email(),
        password: yup.string().min(6).required(),
        passwordRepeat: yup.string().min(6).required().oneOf([yup.ref('password'), null], "Passwords doesn't match"),
    }).required();

    const config: FormConfig = {
        showError: true
    }
    const submitHandler: formSubmitHandlerType = async (data, e) => {
        await setSubmitButtonText("loading...");
        await new Promise((resolve) => setTimeout(resolve, 5000))

        if(!await validationSchema.isValid(data)){
            return;
        }
        e.target.querySelectorAll("input").forEach(e => e.value = "")
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
                <TextField label={"email"} placeholder={"please enter your email"} autoComplete={"off"} name="email"/>

                <TextField label={"password"} placeholder={"please enter your password"} autoComplete={"off"} name="password"/>
                <TextField label={"password repeat"} placeholder={"please enter your password again"} autoComplete={"off"} name="passwordRepeat"/>
                <Button disabled={false} variant={"contained"} color={"success"} type={"submit"}>
                    {submitButtonText}
                </Button>
            </Form>
            <ToastContainer/>

        </Grid>
    );
};

export default Signup;
