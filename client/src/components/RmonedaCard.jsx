/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
/* This code exports a React component called `Rmonedacard` that takes in a prop called `crear`. The
component renders a div with an image, a title, and a paragraph based on the `crear` prop. It also
uses the `useNavigate` hook from the `react-router-dom` library to navigate to a specific URL when
the div is clicked. */
export const Rmonedacard = ({ crear }) => {
    
    const navigate = useNavigate()
    return (
        <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => {
                navigate(`/crear/+${crear.id}`)
            }}
        >
            <img style={{
                padding: 5, width: "auto", textAlign: "center", marginLeft: "auto",
                marginRight: "auto"
            }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDE3xfwkgcL6UwgfLpPNbS5B-Se85dnCZVA&usqp=CAU" />

            <h1 className="fond-bold uppercase">{crear.name}</h1>
            <p className="text-slate-400">{crear.image}</p>
            <div className="flex justify-end">


            </div>

            <hr />
        </div>
    )
}
