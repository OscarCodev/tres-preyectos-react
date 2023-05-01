import styled from "styled-components";
import Product from "./product";

function ListProductos({ productos }) {
  return (
    <ContenedorListProductos>
      {productos.map((producto) => (
        <Product producto={producto}/>
      ))}
    </ContenedorListProductos>
  );
}

const ContenedorListProductos = styled.div`
  display: flex;
  flex-basis: 80%;
  border-bottom: 1px solid gray;
  padding: .5rem;
  overflow-y: auto;
  flex-direction: column;
`;

export default ListProductos;
