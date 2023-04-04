import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import BlogUpdate from "./BlogUpdate";

function BlogDetails({ deleteBlog, updateBlog }) {
    // Allows us to grab route parameters from the Route using React-Router, we need to destructure the id (from App)
    const { id } = useParams()
    
    // New state define to help us grab the blog we need
    const [blogPost, setBlogPost] = useState({});

    const history = useHistory();
    
    const findBlog = async (id) => {
        const response = await axios.get(`http://localhost:3001/blogs/${id}`);
        setBlogPost(response.data)
    }

    useEffect(() => {
        findBlog(id);
    }, [id])

    const handleDelete = (id) => {
        deleteBlog(id)
        history.push("/blogs");
    }

    // Used to hide and show Update
    const [showUpdate, setShowUpdate] = useState(false);
    const [showDetails, setShowDetails] = useState(true);

    const handleClick = () => {
        setShowUpdate(!showUpdate);
        setShowDetails(!showDetails)
    }

    return (
    <div className="flex flex-col gap-4 mb-12">
        {showDetails &&
        <div>
        <h2 className="text-2xl font-bold">{blogPost.title}</h2>
        <h3>{blogPost.author}</h3>
        <p>{blogPost.body}</p>
        <div className="flex gap-12">
            <button onClick={() => handleDelete(id)} className="bg-blue-500 px-8 py-2 rounded-md text-white w-1/2">Delete</button>
            <button onClick={handleClick} className="bg-blue-300 px-8 py-2 rounded-md text-white w-1/2">Update</button>
        </div>
        </div>        
        }
        {showUpdate && <BlogUpdate id={id} blogPost={blogPost} updateBlog={updateBlog} />}
    </div>
    )
}

export default BlogDetails;