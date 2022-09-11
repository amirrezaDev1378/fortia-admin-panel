import React from 'react';
import ReactDOM from 'react-dom';
import BankCard from './BankCard';
import {createRoot} from 'react-dom/client';
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'

it('It should mount', () => {

    const {container} = render(<BankCard

    />);
    expect(container).toBeTruthy();

});


