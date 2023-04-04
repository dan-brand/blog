import { useState } from "react";
import { useHistory } from "react-router-dom";


function BlogUpdate({ id, blogPost, updateBlog }) {

    const [newTitle, setNewTitle] = useState(blogPost.title);
    const [newBody, setNewBody] = useState(blogPost.body);
    const [newAuthor, setNewAuthor] = useState(blogPost.author);

    const handleTitleChange = (event) => {
        setNewTitle(event.target.value)
    }

    const handleBodyChange = (event) => {
        setNewBody(event.target.value)
    }

    const handleAuthorChange = (event) => {
        setNewAuthor(event.target.value)
    }

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        updateBlog(id, newTitle, newBody, newAuthor)
        history.push('/blogs')
    }
    
    return (
        <div className="flex justify-center mt-8">
            <form onSubmit={handleSubmit} className="flex flex-col w-screen gap-4">
                <input type="text" value={newTitle} onChange={handleTitleChange} className="border rounded-md py-2" />
                <textarea value={newBody} onChange={handleBodyChange} className="border rounded-md py-4"></textarea>
                <input type="text" onChange={handleAuthorChange} value={newAuthor} className="border rounded-md py-2" />
                <button className="bg-blue-500 px-8 py-2 rounded-md text-white">Submit</button>
            </form>
        </div>
    )
}

export default BlogUpdate;