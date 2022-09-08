import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import {createRoot} from 'react-dom/client';
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'

it('It should mount', () => {

    const {container} = render(<Login

    />);
    expect(container).toBeTruthy();

});


