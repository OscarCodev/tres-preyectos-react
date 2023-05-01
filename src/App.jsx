import Sumadora from "./components/Sumadora";
import Registro from "./components/registro/Registro";
import Descuentos from "./components/Descuentos";
import { useState } from "react";

function App() {
  const [showPanel1, setShowPanel1] = useState(true);
  const [showPanel2, setShowPanel2] = useState(false);
  const [showPanel3, setShowPanel3] = useState(false);

  //Si el codigo crece y quisiera aumentar mas paneles seria muy ineficiente, debe de haber otra forma
  function manejarPanel1() {
    setShowPanel1(true);
    setShowPanel2(false);
    setShowPanel3(false);
  }

  function manejarPanel2() {
    setShowPanel1(false);
    setShowPanel2(true);
    setShowPanel3(false);
  }

  function manejarPanel3() {
    setShowPanel1(false);
    setShowPanel2(false);
    setShowPanel3(true);
  }

  return (
    <div>
      <h1>Mis 3 proyectos</h1>
      <button onClick={manejarPanel1}>Sumadora de Precios</button>
      <button onClick={manejarPanel2}>Registro de Eventos</button>
      <button onClick={manejarPanel3}>Descuentos en productos</button>
      {showPanel1 ? (
        <Sumadora />
      ) : showPanel2 ? (
        <Registro />
      ) : showPanel3 ? (
        <Descuentos />
      ) : null}
    </div>
  );
}

export default App;
