import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react'; //importamos el hook useState
import { evaluate } from 'mathjs';

function App() {
  //Creamos el estado de lo que el usuario ha ingresado hasta el momento
  const [input, setInput] = useState('');

  //esta funcion va a actualizar el valor del input
  const agregarInput = val => {
    setInput(input + val);

  };

  //funcion para calcular el resultado
  const calcularResultado = () => {
    //Expresion Truthy o Falsy
    //evalua si no es ingresado nada en la pantalla
    if (input) {
      setInput(evaluate(input));

    } else {
      alert('Por favor ingrese los valores para realizar el calculo');
    }
  }

  return (
    <div className='App'>

      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freecodecamp' />
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input} /*estado y prop*/ />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>


      </div>

    </div>
  );
}

export default App;
