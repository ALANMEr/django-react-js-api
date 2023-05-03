import { useEffect,useState } from "react";
import { BlogCard } from "../components/BlogCard"
import { getblogsApi } from "../api/BlogApi.js";

/* This code exports a React component called `BlogList` that fetches a list of blogs from an API using
`getblogsApi` function and displays them using the `BlogCard` component. It uses the `useState` hook
to manage the state of the `blogs` array and the `useEffect` hook to fetch the data from the API
when the component mounts. The fetched data is then stored in the `blogs` state using the `setBlogs`
function. Finally, the component returns a grid of `BlogCard` components, passing each blog object
as a prop. */
export const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const loadBlogs = async () => {
            const res = await getblogsApi()
           setBlogs(res.data)
        }
        loadBlogs()
    }, []);
    return (
        <div className="grid grid-cols-3 gap-3">
        {
            blogs.map(blog=>(
                <BlogCard key={blog.id} blog={blog}/>
            ))}</div>
    )
}
