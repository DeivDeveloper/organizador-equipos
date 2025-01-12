import "./Boton.css"

const Boton = (props) => {
    const textoModificado = `${props.children}`
    return <button className="boton">{textoModificado}</button>
}

export default Boton