import React, { useEffect, useState } from "react";
import { Contenedor } from "./ui-components/ui-componentes";
import Form from "./sumadora/Form";
import styled from "styled-components";
import ListProductos from "./sumadora/listProductos";
import Registrer from "./sumadora/registrer";

function Sumadora() {
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let acumulacionPrecio = 0;
    productos.forEach(
      (producto) => (acumulacionPrecio += Number(producto.precio))
    );
    setTotal(acumulacionPrecio);
  }, [productos]);

  useEffect(() => {
    console.log(productos);
  }, [productos]);

  return (
    <Contenedor>
      <Form setProductos={setProductos} />
      <Sections>
        <ListProductos productos={productos} />
        <Registrer precioTotal={total}/>
      </Sections>
    </Contenedor>
  );
}

const Sections = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export default Sumadora;
