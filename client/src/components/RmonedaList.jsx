import { useEffect, useState } from "react";

import { Rmonedacard } from "./RmonedaCard.jsx";
import { getMonedasApi } from "../api/RMonedaApi.js";

/* This code is defining a React component called `RmonedaList` that fetches data from an API using
`getMonedasApi` function and displays it in a grid of cards using the `Rmonedacard` component. It
uses the `useState` and `useEffect` hooks to manage the state of the fetched data and trigger the
API call respectively. The `moneda` state variable holds the fetched data and is initially set to an
empty array. The `useEffect` hook runs only once when the component mounts and calls the
`loadmoneda` function to fetch the data and update the `moneda` state variable. Finally, the
component returns a grid of cards using the `moneda` state variable and the `Rmonedacard` component. */
export const RmonedaList = () => {
    const [moneda, setMoneda] = useState([]);
    useEffect(() => {
        const loadmoneda = async () => {
            const res = await getMonedasApi()
            setMoneda(res.data)
        }
        loadmoneda()
    }, []);
    return (
        <div className="grid grid-cols-3 gap-3">
            {
                moneda.map(crear => (
                    <Rmonedacard key={crear.id} crear={crear} />
                ))}</div>
    )
}
