import React, { useState } from 'react'

const FunctionCounter = () => {
    const [count, setCount] = useState(0)
   const clickCounter = () =>{
        setCount(count+1)
    }
  return (
    <div>
    <button onClick={clickCounter}>FunctionCounter
    </button>
    {count}
    </div>
   
  )
}

export default FunctionCounter
