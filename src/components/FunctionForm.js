import React, { useState } from 'react'

const FunctionForm = () => {
    const [name, setName] = useState({firstName: '', lastName: ''})
    const firstHandler = (e) =>{
        setName({...name,firstName : e.target.value})
    }
    const secondHandler = (e) =>{
        setName({...name,lastName : e.target.value})
    }
    
    
  return (
    <div>
        <form>
           <input type="text"  name="firstName" value={name.firstName}  onChange={firstHandler}/>  
           <input type="text"  name="lastName" value={name.lastName} onChange = {secondHandler}/>

           firstName : {name.firstName}
           lastName  : {name.lastName}
        </form>
    </div>
  )
}

export default FunctionForm