import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="flex justify-between my-3 items-center">
                <h1 className="text-blue-500 font-bold text-2xl">Dan's Blog</h1>
                <div className="flex gap-3 items-center">
                    <Link to="/">Home</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/create" className="bg-blue-500 p-2 rounded-md text-white">Add Blog</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;