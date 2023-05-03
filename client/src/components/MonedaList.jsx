import { useEffect, useState } from "react";

import { getMonedaApi } from "../api/MonedaApi.js";
import { Monedacard } from "./MonedaCard.jsx";


/* This code exports a functional component called `MonedaList` that uses React hooks to fetch data
from an API and display it in a grid of cards using the `Monedacard` component. The `useState` hook
is used to initialize the `moneda` state variable as an empty array, and the `useEffect` hook is
used to fetch data from the API and update the `moneda` state variable when the component mounts.
The `moneda` state variable is then mapped over to render a `Monedacard` component for each item in
the array. */
export const MonedaList = () => {
    const [moneda, setMoneda] = useState([]);
    useEffect(() => {
        const loadmoneda = async () => {
            const res = await getMonedaApi()
            setMoneda(res.data)
        }
        loadmoneda()
    }, []);
    return (
        <div className="grid grid-cols-3 gap-3">
            {
                moneda.map(crea => (
                    <Monedacard key={crea.id} crea={crea} />
                ))}</div>
    )
}
