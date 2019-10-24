'use strict'
import React from 'react'

const counter = ({counter, decrement, increment}) => (
    <div>
        <h1>{counter}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
)

export default counter