import React from 'react';
import Form from './Form';
import {act, render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import {Button, TextField} from "@mui/material";
import * as yup from "yup"

const btn = <Button type={"submit"} data-testid={"btn"}/>
const input = <TextField name={"test"} data-testid={"input"}/>
const schema = yup.object({test: yup.string().required().min(5, "TEST ERR")})
let _submit_data_ = null;

const submitHandler = (data) => {
    _submit_data_ = data;
}
const form = <Form onSubmit={submitHandler} schema={schema}> {input} {btn} </Form>

const {container} = render(form);


it("It renders", () => {
    expect(container).toBeTruthy()
})

it('It Renders Inputs and submit button', () => {
    expect(screen.getByTestId("btn")).toBeTruthy();
    expect(screen.getByTestId("input")).toBeTruthy();
});

it('It Shows error when typing incorrect input', async () => {
    const input = screen.getByTestId("input").querySelector("input");
    await act(async () => {
        await user.type(input, "1234");
    })
    const error = await screen.getByText("TEST ERR");
    expect(error).toBeTruthy();

})
it('It Deletes Errors When correcting input', async () => {

    const input = screen.getByTestId("input").querySelector("input");
    await act(async () => {
        await user.type(input, "1234");
    })
    await act(async () => {
        await user.type(input, "123456TEST");
    })
    expect(screen.queryByText("TEST ERR")).toBeFalsy();
})

it('It Submits Correct Data', async () => {

    const input = screen.getByTestId("input").querySelector("input");
    await act(async () => {
        await user.type(input, "123456TEST");
    })
    await act(async () => {
        await user.click(screen.getByTestId("btn"));
    })
    expect(_submit_data_).toEqual({test: "123456TEST"})
    _submit_data_ = null;
})

it("It Doesn't Submits If Pass Invalid Data", async () => {

    const input = screen.getByTestId("input").querySelector("input");
    await act(async () => {
        await user.type(input, "test");
    })
    await act(() => {
        expect(() => {
            return user.click(screen.getByTestId("btn"))
        }).rejects.toThrow()
    })
    expect(_submit_data_).toBeNull();
})










