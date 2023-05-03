/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
/* This code exports a React component called `BlogCard` that takes in a prop called `blog`. The
component renders a card with the blog's title, link, and an image. When the card is clicked, it
uses the `useNavigate` hook from the `react-router-dom` library to navigate to a specific blog post
based on the blog's ID. */
export const BlogCard = ({ blog }) => {
    const navigate = useNavigate()
    return (
        <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => {
                navigate(`/blogs/+${blog.id}`)
            }}
        >
            <img style={{
                padding: 5, width: "auto", textAlign: "center", marginLeft: "auto",
                marginRight: "auto"
            }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXJMCESSzaARxuXG8xtIniJdHwMSf7usHKA&usqp=CAU" />

            <h1 className="fond-bold uppercase bg-orange-500 px-3 py-2 rounded-lg">{blog.title}</h1>
            <p className="text-slate-400">{blog.link}</p>
         
    

            <hr />
            <div className="flex justify-end">

                <a href={blog.link}>
                    <button className="bg-blue-500 px-3 py-2 rounded-lg ">{blog.title}</button>
                </a>
            </div>
        </div>
    )
}
