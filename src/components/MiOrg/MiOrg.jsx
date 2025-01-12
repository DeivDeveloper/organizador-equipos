import "./MiOrg.css"

const MiOrg = (props) => {

    // Definir un estado:
    // const [nombreVariable, funcionActualiza] = useState(valorInicial)
    
    // Ejemplo:
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg