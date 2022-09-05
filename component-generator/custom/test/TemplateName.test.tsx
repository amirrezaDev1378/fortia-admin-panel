import React from 'react';
import ReactDOM from 'react-dom';
import TemplateName from './TemplateName';
import {createRoot} from 'react-dom/client';
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'

it('It should mount', () => {

    const {container} = render(<TemplateName

    />);
    expect(container).toBeTruthy();

});


