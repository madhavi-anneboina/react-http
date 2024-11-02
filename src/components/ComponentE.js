import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import { ChannelContext, UserContext } from '../App'

const ComponentE = () => {
    const value =  useContext(UserContext)
    const user = useContext(ChannelContext)
  return (
    <div>
       {value} - {user}
    </div>
  )
}

export default ComponentE