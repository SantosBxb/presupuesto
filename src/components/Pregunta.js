import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({setPresupuesto, setRestante, actualizarPregunta}) => {
  // state cantidad
  const [cantidad, setCantidad] = useState(0);

  //state error
  const [error, setError] = useState(false);


  //fn que lee presuppuesto
  const definirPresupuesto = e => {
    setCantidad(parseInt(e.target.value));
  } 

  //submit presupuesto
  const agregarPresupuesto = e =>{
    e.preventDefault();

    //validar
    if(cantidad < 1 | isNaN(cantidad)){
      setError(true);
      return;
    }

    //quitar error en caso se pasar validacion
    setError(false);
    //si se pasa la validacion
    //asiganr el prepusto y restante
    setPresupuesto(cantidad);
    setRestante(cantidad);
    actualizarPregunta(false)
  }

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje='El Presupuesto No Es Valido'/> : null}

      <form onSubmit={agregarPresupuesto}>
        <input 
          type="number"
          className='u-full-width'
          placeholder='Coloca tu Presupuesto'
          onChange={definirPresupuesto}
        />
        <input 
          type="submit"
          className='button-primary u-full-width'
          placeholder='Definir Presupusto'
        />
      </form>
    </Fragment>
  );
}

Pregunta.prototypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante:PropTypes.func.isRequired,
  actualizarPregunta:PropTypes.func.isRequired,

}
export default Pregunta;