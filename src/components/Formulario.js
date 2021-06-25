import React, { useState} from "react";
import Error from "./Error";
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({setGasto, setCrearGasto}) => {
  // state  para guardar nombrre de gastos y la cantidad, y los posibles errores de validacion
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //fn que agrega gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //construir gasto
  const gasto = {
    nombre: nombre,
    cantidad: cantidad,
    id: shortid.generate()
  }

    //pasar gasto al componente principal
    setGasto(gasto);
    setCrearGasto(true);
    //resetaer form
      setNombre('');
      setCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2> Agrega tus gastos aqui</h2>
      {error ? <Error mensaje='Ambos Campos Son Obligatorios'/> : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired
}

export default Formulario;
