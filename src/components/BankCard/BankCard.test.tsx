import React from 'react';
import ReactDOM from 'react-dom';
import BankCard from './BankCard';
import {createRoot} from 'react-dom/client';
import {act, render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import {data} from "@/../__TESTS__/dummyData/BankCard";
import styles from "@components/BankCard/BankCard.module.scss";
const {container} = render(<BankCard {...data}/>);

it('It should mount', () => {
    expect(container).toBeTruthy();
});
it('It should display right data', () => {
    expect(container.innerHTML).toContain(data.name);
    expect(container.innerHTML).toContain(data.date);
});
it('It should Change class for glass affect', () => {
    const glassCard = render(<BankCard {...data} color={"glass"}/>);
    expect(glassCard.container.className).toContain(styles.Glass);
});


