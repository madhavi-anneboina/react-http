import React,{useState,useEffect} from 'react'
import axios from 'axios'

const DataFetchId = () => {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [fetchDataClick, setFetchDataClick] = useState(1)
    const changeHandler  = () =>{
        setFetchDataClick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${fetchDataClick}`)
         .then((res)=>{
         console.log(res)
         setPost(res.data)
         })
         .catch((err)=>{
            console.log(err)
         })
        },[fetchDataClick])
    
  return (
    <div>
        <input type = "text" value={id} onChange={(e) =>setId(e.target.value)}/>
        <button type="button" onClick={changeHandler}>Fetch data</button>
         <ul>
            <li>{post.title}</li>
            <li>{post.body}</li>
         </ul>
    </div>
  )
}

export default DataFetchId