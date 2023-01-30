import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Link,
} from "react-router-dom";
const Topics = () => {
  const[topic,setTopic]=useState()
  const getTopic= async ()=>{
    try{
      const top= await axios.get("http://localhost:3004/topics")
      
    setTopic(top.data)
    }
    catch(e){
      console.log(e.message)
    }

   
  }

  const deleteClick= async(id)=>{
    await axios.delete("http://localhost:3004/topics/"+id)
    getTopic()
  }
  
  useEffect(()=>{
    getTopic()
  },[])


  return (

    <>
    <Link to='/topics/create'>create</Link>


    <div>
      <ul className='admin-head'>
        <li>id</li>
        <li>title</li>
        <li>update</li>
        <li>delete</li>
      </ul>
    </div>



    <div>
      {
        
      topic &&
      topic.map((item)=>(
        <ul className='admin-main' key={item.id}>
        <li>{item.id}</li>
        <li>{item.topic}</li>
        <li><Link to={`/topics/update/${item.id}`}>Update</Link></li>
        <li><button onClick={()=>deleteClick(item.id)}>delete</button></li>
        </ul>
      ))
     
    }
    </div>
    </>
  )
}

export default Topics