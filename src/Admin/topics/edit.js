import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
const EditTopic = () => {
  let navigate = useNavigate();
  const[topic,setTopic]=useState('')
  const { id } = useParams();
  const getTopic= async(id)=>{
   try{
    const top= await axios.get('http://localhost:3004/topics/'+ id)
    setTopic(top.data)
   }
   catch(e){
    console.log(e.message)
   }
  }
  useEffect(()=>{
    getTopic(id)
  },[id])

  const handleClick=async()=>{
    const data={
      topic
    }
    await axios.put('http://localhost:3004/topics/'+ id,data)
    navigate("/admin/topics")
   
  }

  
  
  return (
    <>
   <div>
    <form>
    <input type='text'
     name='topic'
     value={topic.topic}
     onChange={(e)=>setTopic(e.target.value)}
    />
    <button type="button" onClick={handleClick}>
          update
    </button>

    </form>
   </div>

    </>
  )
}

export default EditTopic