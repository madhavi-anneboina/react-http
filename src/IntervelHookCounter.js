import React, { useEffect, useState } from 'react'

const IntervelHookCounter = () => {
    const [count,setCount] = useState(0)

    const tick = () =>{
        setCount(count + 1)
    }
    useEffect(()=>{
        const intervel = setInterval(tick,1000)
        return () =>{
          clearInterval(intervel)
        }
    },[count])
  return (
    <div>{count}</div>
  )
}

export default IntervelHookCounter