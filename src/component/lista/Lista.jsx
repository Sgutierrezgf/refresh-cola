import React from 'react'

function Lista({nombres}) {
    return (
        <div>
            <ul>
                {
                    nombres.map(nombre => (
                        <li>{nombre.nombre}</li>
                         ))
                }
            </ul>
        </div>
    )
}

export default Lista
