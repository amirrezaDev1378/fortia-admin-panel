import React from 'react';
import ReactDOM from 'react-dom';
import ContainedPieChart from './ContainedPieChart';
import {createRoot} from 'react-dom/client';
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'

it('It should mount', () => {

    const {container} = render(<ContainedPieChart

        data={[{value: 400, name: "test"}]}/>);
    expect(container).toBeTruthy();

});


