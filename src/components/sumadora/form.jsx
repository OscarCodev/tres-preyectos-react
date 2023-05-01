import React, { useEffect, useState } from "react";
import { ContenedorForm } from "../ui-components/ui-componentes";

function Form({ setProductos }) {
  const [form, setForm] = useState({
    producto: "",
    precio: 0,
  });

  const { producto, precio } = form;

  const handleForm = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    //Validacion
    if(!(producto && precio)){
      return;
    }
    //Agregar el Producto y precio a un almacenador
    setProductos(productos => [form, ...productos]);
    //Reiniciar el formulario
    setForm({
      producto: "",
      precio: 0,
    });
  };

  return (
    <ContenedorForm onSubmit={handleOnSubmit}>
      <label>Nombre producto:</label>
      <input
        type="text"
        value={producto}
        onChange={handleForm}
        name="producto"
      />
      <label>Precio:</label>
      <input type="number" value={precio} onChange={handleForm} name="precio" />
      <input type="submit" value="Agregar" />
    </ContenedorForm>
  );
}

export default Form;
