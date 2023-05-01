import styled from "styled-components";

function CardEvento({evento, eliminarEvento}) {
  const {titulo, descripcion, fecha} = evento;

  return <Card>
    <p>Titulo: {titulo} </p>
    <p>Descripcion: {descripcion}</p>
    <p>Fecha vencimiento: {fecha}</p>
    <button
      onClick={()=>eliminarEvento(titulo)}
    >Cumplido</button>
  </Card>;
}

const Card = styled.div`
    border: 1px solid lightgray;
    border-radius: 15px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    margin-bottom: .5rem;
`

export default CardEvento;

