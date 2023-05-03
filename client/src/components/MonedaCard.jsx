/* eslint-disable react/prop-types */
import "antd/dist/antd.css"
import { Button, Modal } from 'antd';
import { useState } from 'react';

import { Grafica } from "../components/Grafica"
/* Defining a React functional component called `Monedacard` that takes in a prop called `crea`. The
component returns a JSX template that displays information about the `crea` prop, including an
image, date, and price. It also includes a button that opens a modal with a `Grafica` component
inside. The component uses the `useState` hook to manage the state of the modal being open or
closed. Finally, the component is being exported so it can be used in other parts of the
application. */
export const Monedacard = ({ crea }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>

            <div>


                <img style={{
                    padding: 5, width: "auto", textAlign: "center", marginLeft: "auto",
                    marginRight: "auto"
                }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWY6489Fdy7srJOiATsfQisivjJ-xQry8q6A&usqp=CAU" />

                <h1 className="text-slate-400 fond-bold uppercase">{crea.date}</h1>
             
                <p className="text-slate-400">{crea.price}</p>
                <hr />

                <div className="flex justify-end">
                    <Button type="primary" onClick={showModal}>
                        Open Gráfica
                    </Button>
                    <Modal title="Moneda Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <Grafica />
                    </Modal>
               </div>

            </div>
        </>


    )
}
