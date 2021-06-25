import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Pregunta from "./components/Pregunta";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  //state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restanete, setRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({}); //guarda informacion de cada gasto ingresado
  const [crearGasto, setCrearGasto] = useState(false); //para que muestre o no el componente de listado

  //useEffect que actualiza el restante
  useEffect(()=>{
    if(crearGasto){
      //guarda el nuevo gasto
      setGastos([...gastos, gasto]);

      //resta del presupuesto actual
      const presuespoRestante = restanete - gasto.cantidad ;
      setRestante(presuespoRestante);

    }
    //resetear   a false, ya que si no, se ejecutara en un buclew infinito
    setCrearGasto(false);
  }, [crearGasto, gasto, gastos, restanete])

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  setGasto={setGasto}
                  setCrearGasto={setCrearGasto}/>
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}/>
                  
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restanete}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
