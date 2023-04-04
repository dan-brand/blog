import { Link } from "react-router-dom";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BlogDetails from "./BlogDetails";

function BlogList({ blogs, deleteBlog, updateBlog }) {
    const { path, url } = useRouteMatch();
    
    const renderedBlogList = blogs.map((blog) => {
        return (
            <div key={blog.id} className="border rounded-md py-4 mb-6 pl-4">
                <Link to={`${url}/${blog.id}`}>
                    <h2 className="text-2xl font-bold">{blog.title}</h2>
                    <p>{blog.author}</p>
                </Link>
            </div>
        )
    })
    
    return (
        <div>
        <div className="mt-16">
            {renderedBlogList}
        </div>

        <Switch>
            <Route path={`${path}/:id`}>
                <BlogDetails deleteBlog={deleteBlog} updateBlog={updateBlog} />
            </Route>
        </Switch>
        </div>
    )
}

export default BlogList;