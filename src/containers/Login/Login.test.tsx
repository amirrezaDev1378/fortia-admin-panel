import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import {createRoot} from 'react-dom/client';
import {act, render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import LoginMock from "../../../__TESTS__/__mocks__/serverMock/loginMock";

import RT from 'react-toastify';

jest.mock('react-toastify');
const mockedToast = (RT.toast as any as jest.Mock);
beforeEach(() => {
    mockedToast.mockImplementation((data, options) => options.type === "success");

})
const {container} = render(<Login/>);


it('It should mount', () => {
    expect(container).toBeTruthy();
});

it('It should Login with correct data and show the correct message', async () => {
    let server = LoginMock("success");
    const username = screen.getByLabelText("username");
    const password = screen.getByLabelText("password");
    const submit = container.querySelector("button[type='submit']");
    const tryToLogin = async () => {
        await act(async () => {
            await user.click(username)
            await user.type(username, "__TEST_USERNAME__");
            await user.click(password)
            await user.type(password, "__TEST_PASSWORD__");
            await user.click(submit);
        })
    }

    await tryToLogin()

    expect(mockedToast).toHaveBeenCalledTimes(1)
    expect(mockedToast.mock.results[0].value).toBe(true)

    server.close();
    server = LoginMock("fail");
    server.resetHandlers()
    server.listen()
    await tryToLogin()
    expect(mockedToast).toHaveBeenCalledTimes(2)
    expect(mockedToast.mock.results[1].value).toBe(false)

})


