import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
const EditBlog = () => {
  let navigate = useNavigate();
  const[topic_id,setTopic]=useState()
  const[title,setTitle]=useState()
  const[view,setView]=useState()
  const[author,setAuthor]=useState()
  const[description,setDescription]=useState()
  const[created_date,setDate]=useState()
  const { id } = useParams();
  const getBlog=async()=>{
    try{
      const blo=await axios.get('http://localhost:3004/blogs/'+ id)
    setTitle(blo.data.title)
    setAuthor(blo.data.author)
    setDescription(blo.data.description)
    setDate(blo.data.created_date)
    setView(blo.data.view)
    setTopic(blo.data.topic_id)
    }
    catch(e){
      console.log(e.message)
    }
  }

  useEffect(()=>{
       getBlog(id)
  },[id])


  const handleClick=async()=>{
    const data={
      title,
      author,
      description,
      created_date,
      view,
      topic_id
    }
    await axios.put('http://localhost:3004/blogs/'+ id,data)
    navigate("/admin/blogs")
   
  }
  return (
    <>
    <div>
    <form>
    <input type='text'
     name='title'
     value={title}
     onChange={(e)=>setTitle(e.target.value)}
    />
    <input type='text'
     name='title'
     value={author}
     onChange={(e)=>setAuthor(e.target.value)}
    />
    <input type='text'
     name='title'
     value={description}
     onChange={(e)=>setDescription(e.target.value)}
    />
    <input type='text'
     name='title'
     value={created_date}
     onChange={(e)=>setDate(e.target.value)}
    />
    <input type='number'
     name='view'
     value={view}
     onChange={(e)=>setView(e.target.value)}
    />
    <button type="button" onClick={handleClick}>
          update
    </button>

    </form>
   </div>
    </>
  )
}

export default EditBlog