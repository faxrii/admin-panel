import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const AddBlog = () => {
  let navigate = useNavigate();
  const[topics,setTopics]=useState()
  const[title,setTitle]=useState()
  const[topic_id,setTopicId]=useState()
  const[view,setView]=useState()
  const[author,setAuthor]=useState()
  const[description,setDescription]=useState()
  const[created_date,setDate]=useState()
  const getTopics=async ()=>{
    try{
      const top= await axios.get('http://localhost:3004/topics')
    setTopics(top.data)
    }
    catch(e){
      console.log(e.message)
    }
  }

  const topicRef = useRef();
  const handleSubmit=async ()=>{
    const data={
      topic_id:Number(topicRef.current.value),
      title,
      view,
      author,
      description,
      created_date
    }
     await  axios.post('http://localhost:3004/blogs/',data)
     navigate("/admin/blogs")
  }

  
  
  useEffect(()=>{
    getTopics()
  },[])




 
  
 
  
 
  return (
    <>
    <div>
      <select ref={topicRef} >
        {
        topics &&
        topics.map((item)=>(
          
          
          <option key={item.id} value={item.id}>{item.topic}</option>
          

        ))
      }
        </select>
     
      
    </div>

    <div>
    <form>


   
    <input type='text'
     name='title'
     
     onChange={(e)=>setTitle(e.target.value)}
    />

   
    <input type='text'
     name='author'
     
     onChange={(e)=>setAuthor(e.target.value)}
    />
    <input type='text'
     name='description'
     
     onChange={(e)=>setDescription(e.target.value)}
    />
    <input type='text'
     name='date'
     
     onChange={(e)=>setDate(e.target.value)}
    />
    <input type='number'
     name='view'
     value={view}
     onChange={(e)=>setView(e.target.value)}
    />
    <button type="button" onClick={handleSubmit}>
          create
     </button>

    </form>
   </div>
    </>
  )
}

export default AddBlog