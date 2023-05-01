import styled from "styled-components";

function ProductDescuento({producto}) {
  const {nombre, precioFinal} = producto;
  return (
    <ContenedorProduct>
        <p>{nombre}</p>
        <p>$ {precioFinal}</p>
    </ContenedorProduct>
  )
  
  ;
}

const ContenedorProduct = styled.div`
    width: 100%;
    border: 1px solid gray;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    padding: 0 .5rem;
`

export default ProductDescuento;