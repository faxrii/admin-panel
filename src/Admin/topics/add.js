import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const AddTopic = () => {
  const[topic,setTopic]=useState('')
  
  let navigate = useNavigate();
  const handleSubmit=async ()=>{
    const data={
      topic
    }
     await  axios.post('http://localhost:3004/topics/',data)
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
     <button type="button" onClick={handleSubmit}>
          create
     </button>
 
     </form>
    </div>
 
     </>
  )
}

export default AddTopic