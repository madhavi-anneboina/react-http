import React from 'react'
import { UserContext } from '../App'

const ComponentF = () => {
  return (
    <div>
        <UserContext.Consumer>
            {
                 value => {
                    return <div> the vslue is {value}</div>
                 }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF