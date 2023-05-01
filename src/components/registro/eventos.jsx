import CardEvento from "./cardEvento";
import styled from "styled-components";

function Eventos({ eventos, eliminarEvento }) {
  return (
    <ContenedorEventos>
    {
      eventos.map(evento => (
        <CardEvento
          evento={evento}
          eliminarEvento={eliminarEvento}
        />
      ))
    }
    </ContenedorEventos>
  );
}

const ContenedorEventos = styled.div`
  width: 50%;
  padding: 1rem;
  overflow-y: auto;
`;

export default Eventos;
