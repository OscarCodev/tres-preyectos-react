import React, { useEffect, useState } from "react";
import { ContenedorForm } from "../ui-components/ui-componentes";
import styled from "styled-components";

function FormDescuentos({ setProductos }) {
  const [producto, setProducto] = useState({
    nombre: "",
    costo: "",
    descuento: "",
  });

  const { nombre, costo, descuento } = producto;

  const handleOnChange = ({ target }) => {
    setProducto({
      ...producto,
      [target.name]: target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    //Validacion
    if (!(nombre && costo && descuento)) {
      return;
    }
    //Procesar el producto
    let precioFinal = 0;
    if (descuento === "15%") {
      precioFinal = costo - (costo * 15) / 100;
    } else {
      precioFinal = costo - (costo * 25) / 100;
    }
    //Añadir el precio final al objeto
    producto.precioFinal = precioFinal;
    //Agregar el producto
    setProductos((productos) => [...productos, producto]);

    //Reiniciar el formulario
    setProducto({
      nombre: "",
      costo: "",
      descuento: "",
    });
  };

  return (
    <ContenedorForm onSubmit={handleOnSubmit}>
      <label>Marca:</label>
      <select value={nombre} onChange={handleOnChange} name="nombre">
        <option value="">---Selecionar---</option>
        <option value="arroz">Arroz</option>
        <option value="azucar">Azucar</option>
        <option value="maiz">Maiz</option>
      </select>
      <label>Costo:</label>
      <input
        type="number"
        name="costo"
        value={costo}
        onChange={handleOnChange}
      />
      <Campo>
        <label>Descuento: </label>
        <input
          type="radio"
          name="descuento"
          value="15%"
          checked={descuento === "15%"}
          onChange={handleOnChange}
        />{" "}
        15%
        <input
          type="radio"
          name="descuento"
          value="25%"
          checked={descuento === "25%"}
          onChange={handleOnChange}
        />{" "}
        25%
      </Campo>
      <input type="submit" value="Agregar Producto" />
    </ContenedorForm>
  );
}

const Campo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default FormDescuentos;
