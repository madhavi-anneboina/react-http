import React, { useState } from 'react'

const HookCounter = () => {
    const intialCount = 0
    const [count,setCount] = useState(intialCount)

    const resetCount = () =>{
        setCount(intialCount)
    }
    const incrementCount = ()=>{
        setCount(prevCount => prevCount+1)
    }
    const decrementCount = () =>{
        setCount(prevCount=> prevCount - 1)
    }
  return (

    <div>
        {count}
        <button onClick={resetCount}>Reset</button>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        
    </div>
  )
}

export default HookCounter