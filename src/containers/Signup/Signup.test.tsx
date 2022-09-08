import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './Signup';
import {createRoot} from 'react-dom/client';
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'

it('It should mount', () => {

    const {container} = render(<Signup

    />);
    expect(container).toBeTruthy();

});


