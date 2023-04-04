import { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateBlog({ addBlog }) {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleBody = (event) => {
        setBody(event.target.value);
    }

    const handleAuthor = (event) => {
        setAuthor(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBlog = {
            title: title,
            body: body,
            author: author
        }
        addBlog(newBlog)
        history.push('/blogs')
    }
    
    return (
        <div className="flex justify-center mt-20">
            <form onSubmit={handleSubmit} className="flex flex-col w-3/4 gap-4">
                <label>Blog Title:</label> 
                <input type="text" required onChange={handleTitle} value={title} className="border rounded-md py-2" />
                <label>Blog Body:</label>
                <textarea required onChange={handleBody} value={body} className="border rounded-md py-4"></textarea>
                <label>Blog Author:</label>
                <input type="text" required onChange={handleAuthor} value={author} className="border rounded-md py-2" />
                <button className="bg-blue-500 px-8 py-2 rounded-md text-white">Submit</button>
            </form>
        </div>
    )
}

export default CreateBlog;