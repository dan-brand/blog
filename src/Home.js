import { Link } from "react-router-dom";
import profilePicture from './daniel_brand.jpg'

function Home() {
    return (
        <div className="h-80 grid grid-cols-1 justify-items-center gap-10 my-24">
            <h1 className="text-2xl font-bold">Welcome to the Blog!</h1>
            <img src={profilePicture} className="rounded-full w-1/4" alt="daniel brand" />
            <Link to="/blogs" className="bg-blue-500 px-8 py-2 rounded-md text-white">See Blogs</Link>
        </div>
    )
}

export default Home;