import { useEffect, useState } from "react";
import axios from "axios";
import BlogList from "./BlogList";
import Navbar from "./Navbar";
import CreateBlog from "./CreateBlog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
    // State is set inside App, remember therefore, any changes to state should be inside the App component that is why fetchBlogs, addBlog and deleteBlog are defined in App 
    const [blogs, setBlogs] = useState([])
    
    // Next 2 code blocks are used to list all blogs from the database, blogs are then passed down to BlogList as a pop
    const fetchBlogs = async () => {
        const response = await axios.get("http://localhost:3001/blogs");
        setBlogs(response.data);
    }

    useEffect(() => {
        fetchBlogs();
    }, []);
    

    //Used to add a blog in CreateBlog
    const addBlog = async (blogObject) => {
        const response = await axios.post('http://localhost:3001/blogs', blogObject);
        const updatedBlogs = [
            ...blogs,
            response.data
        ]
        setBlogs(updatedBlogs);
    }

     //Used to delete a blog in BlogDetails
    const deleteBlog = async (id) => {
        await axios.delete(`http://localhost:3001/blogs/${id}`)
        const updatedBlogs = blogs.filter((blog) => {
            return blog.id !== id;
        })
        setBlogs(updatedBlogs);
        fetchBlogs();
    }

    // Used to update a blog
    const updateBlog = async (id, newTitle, newBody, newAuthor) => {
        const response = await axios.put(`http://localhost:3001/blogs/${id}`, {
            title: newTitle,
            body: newBody,
            author: newAuthor
        })
        const updatedBlogs = blogs.map((blog) => {
            if (blog.id === id) {
                return { ...blog, ...response.data }
            }
            return blog;
        })
        setBlogs(updatedBlogs);
        fetchBlogs();
    }

    return (
        <Router>
            <div className="max-w-screen-md mx-auto">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/blogs">
                        <BlogList blogs={blogs} deleteBlog={deleteBlog} updateBlog={updateBlog} />
                    </Route>
                    <Route path="/create">
                        <CreateBlog addBlog={addBlog} />
                    </Route>
                </Switch>
            </div>
        </Router>   
    )
}

export default App;