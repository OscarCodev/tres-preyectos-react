import React, { useEffect, useState } from "react";
import Formulario from "./formulario";
import Eventos from "./eventos";
import styled from "styled-components";

//Lo interesante que aprendi aqui es que estamos pasando
//las props a 3 niveles de jeraquia 
//desde card enviamos el titulo a la prop eliminarEvento
//la pasamos a eventos y de eventos a registro
//que es donde se manipula

export default function Registro() {

  const [eventos, setEventos] = useState([]);

  function agregarEvento(evento){
    setEventos([...eventos, evento])
  }

  function eliminarEvento(titulo){
    const eventosActualizados = eventos.filter((evento)=> evento.titulo !== titulo);
    setEventos(eventosActualizados)
  }

  return (
    <Contenedor>
      <Formulario agregarEvento={agregarEvento}/>
      <Eventos eventos={eventos} eliminarEvento={eliminarEvento}/>
    </Contenedor>
  );
}

const Contenedor = styled.div`
  max-width: 650px;
  height: 300px;
  display: flex;
  border: 1px solid gray;
`






