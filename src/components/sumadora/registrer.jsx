import styled from "styled-components";

function Registrer({precioTotal}) {
  return (
    <ContenedorRegistrer>
        <p>Precio total $ {precioTotal}</p>
    </ContenedorRegistrer>
  );
}

const ContenedorRegistrer = styled.div`
  display: flex;
  flex-basis: 20%;
  justify-content: center;
  align-items: center;
`;

export default Registrer;
