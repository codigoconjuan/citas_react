import React from 'react';

const Cita = ({cita}) => ( 
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span> </p>
        <p>Dueño: <span>{cita.propietario}</span> </p>
        <p>Fecha: <span>{cita.fecha}</span> </p>
        <p>Hora: <span>{cita.hora}</span> </p>
        <p>Sintomas: <span>{cita.sintomas}</span> </p>

    </div>
);
 
export default Cita;