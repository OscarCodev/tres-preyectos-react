import styled from "styled-components";
import ProductDescuento from "./productDescuento";

function ListProductos({ productos }) {
  return (
    <ContenedorListProductos>
      {productos.map((producto) => (
        <ProductDescuento producto={producto} />
      ))}
    </ContenedorListProductos>
  );
}

const ContenedorListProductos = styled.div`
  display: flex;
  flex-basis: 80%;
  padding: 0.5rem;
  overflow-y: auto;
  flex-direction: column;
`;

export default ListProductos;
