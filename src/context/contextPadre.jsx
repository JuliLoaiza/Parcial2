import React, { useState } from "react";
import { ContextHijo } from './contextHijo'

const usuario = {}
export const ContextPadre = ({ hijo }) => {
    const [usuario, setUser] = useState();
    return (
        <ContextHijo.Provider value={{ usuario, setUser }}>
            <div className="App">
                <h1>Segundo Parcial</h1>
                <h1>Lista:</h1>
                <div className="card">
                </div>
            </div>
        </ContextHijo.Provider>


    )
}
