import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
  Link,
} from "react-router-dom";
const Blogs = () => {
  const[blogs,setBlogs]=useState()
  const getBlogs= async ()=>{
    try{
      const blo=await axios.get("http://localhost:3004/blogs")
    setBlogs(blo.data)
    }
    catch(e){
      console.log(e.message)
    }
  }

  const deleteClick=async(id)=>{
    await axios.delete("http://localhost:3004/blogs/" + id)
    getBlogs()
  }



  useEffect(()=>{
    getBlogs()
  },[])
  return (
    <>
    <Link to='/blogs/create'>create</Link>


   <div>
     <ul className='admin-head'>
    <li>id</li>
    <li>title</li>
    <li>author</li>
    <li>description</li>
    <li>created_date</li>
    <li>view</li>
    <li>update</li>
    <li>delete</li>
      </ul>
    </div>

    <div>
      {
        blogs &&
        blogs.map((item)=>(
          <ul className='admin-main' key={item.id}>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <li>{item.author}</li>
            <li className='desc'>{item.description}</li>
            <li>{item.created_date}</li>
            <li>{item.view}</li>
            <li><Link to={`/blogs/update/${item.id}`}>Update</Link></li>
            
           <li><button onClick={()=>deleteClick(item.id)}>delete</button></li> 
            
          </ul>
        ))
      }
    </div>
    </>
  )
}

export default Blogs