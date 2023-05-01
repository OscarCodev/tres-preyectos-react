import React from "react";
import styled from "styled-components";

function Product({producto}) {
    const {producto: name, precio} = producto;
  return (
    <ContenedorProduct>
        <p>{name}</p>
        <p>$ {precio}</p>
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

export default Product;
