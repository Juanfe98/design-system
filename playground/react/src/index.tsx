import React from 'react'
import ReactDOM from 'react-dom'

import { Button, Color } from '@ds.e/react/lib'

// importing the css from our ds
import '@ds.e/scss/lib/Button.css';
import '@ds.e/scss/lib/Utilities.css';

ReactDOM.render(
    <Color hexCode='#000000' />,
    document.querySelector('#root')
)