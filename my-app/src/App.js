
import React from 'react';
import Contador from './components/Contador';
import Jsx from './components/Jsx';
import Lista from './components/Lista';
import ListaApi from './components/ListaApi';
import Formulario from './components/Formulario';
import ForHook from './components/FormHook';
import FormHook from './components/FormHook';
import EjemploUno from './components/EjemploUno'

import Saludo from './components/Saludo'
import Comentario from './components/Comentario'
function App() {
  const sujeto ={
    nombre : 'alejandrino',
    urlImagen :  "https://via.placeholder.com/64",
    text : 'Este es el comentario de juanito',
  }
  return (
    <div className = "container mt-5">
      {/* <Contador>  </Contador>
      <Jsx/>
      <Lista/>
      <ListaApi/> */}
      {/* <h1>Mi app</h1>
      <Formulario></Formulario>
      <FormHook></FormHook> */}
      {/* <EjemploUno></EjemploUno> */}

      <Saludo persona ="alejandro"></Saludo>
      <Saludo persona ="adolfo"></Saludo>
      <Saludo persona ="angela"></Saludo>
      <Comentario sujeto ={sujeto}></Comentario>
      <Comentario sujeto ={sujeto}></Comentario>
      <Comentario sujeto ={sujeto}></Comentario>

    </div>
  );
}


export default App;
