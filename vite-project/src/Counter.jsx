import React, { useState } from 'react';

function MyComponent(){
    const [count, setCount] = useState(0)
    const increment = ()=>{
        setCount(count + 1)
    }
    const decrement = ()=>{
        setCount(count - 1)
    }
    const reset = ()=>{
        setCount(0)
    }
    
    return (
        <>
        <h1>Counter App</h1>
        <div>
        <p className='count-display'>{count}</p>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
        </>
    )
}
export default MyComponent