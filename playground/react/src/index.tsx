import React from 'react'
import ReactDOM from 'react-dom'

import { Button, Color, Text } from '@ds.e/react/lib'

// importing the css from our ds
import '@ds.e/scss/lib/Utilities.css';
import '@ds.e/scss/lib/Button.css';
import '@ds.e/scss/lib/Text.css';

ReactDOM.render(
    <>
        <Color hexCode='#000000' />
        <Text>Hey, I'm the Text component</Text>
    </>,
    document.querySelector('#root')
)