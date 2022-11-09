import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from '@ds.e/react/lib'

ReactDOM.render(
    <div style={{ padding: '40px' }}>
        <Button label="Example Button"/>
    </div>,
    document.querySelector('#root')
)