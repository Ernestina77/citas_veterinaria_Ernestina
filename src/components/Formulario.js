import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const [ error, actualizarError ] = useState(false)

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value 
        })
    }

    const { mascota, especie, propietario, fecha, hora, sintomas } = cita;

    const submitCita = e => {
        e.preventDefault();

        if(mascota.trim() === ''  || especie.trim() === ''  || propietario.trim() === ''  || fecha.trim() === ''  || hora.trim() === ''  || sintomas.trim() === '' ){
            actualizarError(true);
            return;
        }

        actualizarError(false);

       
        cita.id = uuid();

        
        crearCita(cita);

       
        actualizarCita({
            mascota: '',
            especie: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear una cita</h2>

            { error ? <p className="alerta-error">Por favor llenar todos los campos.</p>     : null }

            <form
                onSubmit={submitCita}
            >
                <label>Nombre de la mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Especie de la mascota</label>
                <input 
                    type="text"
                    name="especie"
                    className="u-full-width"
                    placeholder="Especie de la mascota"
                    onChange={actualizarState}
                    value={especie}
                />

                <label>Nombre del propietario</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del propietario de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha de la cita</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora de la cita</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Síntomas que presenta</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar una cita</button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;