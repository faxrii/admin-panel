import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Home/Home.js";
import Admin from "./Admin/Admin.js"
import Topics from "./Admin/topics";
import Blogs from "./Admin/blogs";
import EditTopic from "./Admin/topics/edit";
import AddTopic from "./Admin/topics/add";
import AddBlog from "./Admin/blogs/add";
import EditBlog from "./Admin/blogs/edit";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home/>
      ),
    },
    {
      path: "/admin",
      element: <Admin/>,
    },
    {
      path: "/admin/topics",
      element: <Topics/>,
    },
    {
      path: "/admin/blogs",
      element: <Blogs/>,
    },
    {
      path:"/topics/update/:id",
      element:
      <EditTopic/>
      
    },
    {
      path:"/topics/create",
      element:
      <AddTopic/>
      
    },
    {
      path:"/blogs/create",
      element:
      <AddBlog/>
      
    },
    {
      path:"/blogs/update/:id",
      element:
      <EditBlog/>
      
    },
    

  ]);
 
  return (
   
      <div>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
