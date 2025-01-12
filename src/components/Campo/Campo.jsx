import "./Campo.css"

const Campo = (props) => {
  const tituloModificado = `${props.titulo}`
  const placeholderModificado = `${props.placeholder}`
  
  // Desestructuración
  const { type = "text" } = props;
  
  const manejarCambio = (input) => {
    props.actualizarValor(input.target.value)
  }
  
  return (
    <div className={`campo campo-${type}`}>
      <label>{tituloModificado}</label>
      <input 
      type={type} 
      placeholder={placeholderModificado} 
      required={props.required} 
      value={props.valor} 
      onChange={manejarCambio}
      />
    </div>
  );
};

export default Campo;