import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [topic, setTopic] = useState();
    const [blogs,setBlogs]=useState();
    const [newBlogs,setNewBlogs]=useState();
    const getTopic = async () => {
    try {
      const top = await axios.get("http://localhost:3004/topics");
      setTopic(top.data);
    } catch (e) {
      console.log(e.message);
    }

    
  };
  const getBlogs= async()=>{
    try{
      const blo=await axios.get("http://localhost:3004/blogs")
      setBlogs(blo.data)
      setNewBlogs(blo.data)
    }
    catch(e){
      console.log(e.message)
    }
  }
  const clickHandle=(topic_id)=>{
        if(topic_id) {
          setNewBlogs(blogs.filter((blog) => blog.topic_id === topic_id))
        } else {
          setNewBlogs(blogs)
        }
         
  }
useEffect(()=>{
  getTopic()
  getBlogs()
  
}, [])
 
  return (
    <>
      <div className="head-div">
      <ul>
      <li  onClick={() =>clickHandle()}>Home</li>
        {topic &&
            topic.map((item) => (
              
               
                <li key={item.id} onClick={() =>clickHandle(item.id)}>{item.topic}</li>
            
               
            ))}
                </ul>

           
       
      </div>
      <div className="main-div">
        <div className="main-box">
           
              {
                newBlogs && 
                newBlogs.map((blog)=>(
                  <ul key={blog.id}>
                  <li>{blog.topic_id}</li>
                  <li>{blog.title}</li>
                  <li>{blog.author}</li>
                  <li>{blog.id}</li>
                  <li>{blog.description}</li>
                  <li>{blog.created_date}</li>
                  <li>{blog.view}</li>
                  <li>{blog.image}</li>
                 
                  </ul>

                ))
              }
             
        </div>
      </div>
    </>
  )
}

export default Home