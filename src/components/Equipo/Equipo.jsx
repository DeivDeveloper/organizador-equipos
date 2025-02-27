import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  // Destructuración
  const { colorPrimario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.3),
  };

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <input
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(evento) => {
              actualizarColor(evento.target.value, id);
            }}
          />
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                colorPrimario={colorPrimario}
                datos={colaborador}
                key={index}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
