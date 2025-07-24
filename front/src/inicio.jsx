import { Link } from 'react-router-dom'
import './inicio.css'

function Boton({texto}) {
    return <button  className="boton">
        {texto}
    </button>
}
function Titulo() {
    return <h1>
            TuTopAnime
            </h1>
}

function Marco() {
    return  <div className="marco" >
                <Boton texto = "Crear cuenta"/>
                <Boton texto = "Iniciar sesion"/>
                <Boton texto = "Continuar como invitado"/>
            </div>
}
function Inicio(){
    return  <div>
            <Titulo/> 
            <Marco/>
            </div>
}

export default Inicio

