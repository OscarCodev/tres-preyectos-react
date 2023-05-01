import React, { useEffect, useState } from "react";
import { Contenedor, ContenedorForm } from "./ui-components/ui-componentes";
import FormDescuentos from "./descuentos/formDescuentos";
import ListProductos from "./descuentos/listProducts";
function Descuentos() {
  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    console.log(productos)
  },[productos])
  return (
  <Contenedor>
    <FormDescuentos setProductos={setProductos}/>
    <ListProductos productos={productos}/>
  </Contenedor>
  );
}

export default Descuentos;
