import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Formulario({agregarEvento}) {
  const [evento, setEvento] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
  });

  const { titulo, descripcion, fecha } = evento;

  useEffect(() => {
    console.log(evento);
  }, [evento]);

  function manejarEvento({ target }) {
    const { name, value } = target;
    setEvento({
      ...evento,
      [name]: value,
    });
  }

  function enviarEvento(e) {
    e.preventDefault();
    //Agregar evento
    agregarEvento(evento);
    //Reiniciar Formulario
    setEvento({
        titulo: "",
        descripcion: "",
        fecha: ""
      });
  }

  return (
    <ContenedorForm onSubmit={enviarEvento}>
      <label>Título</label>
      <input
        type="text"
        name="titulo"
        value={titulo}
        onChange={manejarEvento}
      />
      <label>Descripción</label>
      <textarea
        name="descripcion"
        rows="5"
        value={descripcion}
        onChange={manejarEvento}
      ></textarea>
      <label>Fecha Vencimiento</label>
      <input type="date" name="fecha" value={fecha} onChange={manejarEvento} />
      <input type="submit" value="Agregar evento" />
    </ContenedorForm>
  );
}

const ContenedorForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-evenly;
  border-right: 1px solid gray;
`;
