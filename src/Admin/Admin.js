import React from 'react'

import {
    Link,
  } from "react-router-dom";
const Admin = () => {
  return (
    <div>
        <Link to="/admin/topics">Topics</Link>
        <br/>
        <Link to="/admin/blogs">Blogs</Link>
    
    </div>
  )
}

export default Admin