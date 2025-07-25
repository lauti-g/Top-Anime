import { Link } from 'react-router-dom'
import './Inicio.css'

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
                <Link to="/CrearCuenta" className='link'>Crear Cuenta</Link>
                <Link to="/IniciarSesion" className='link'>Iniciar sesion</Link>
                <Link to="/Home" className='link'>Invitado</Link>
            </div>
}
function Inicio(){
    return  <div>
            <Titulo/> 
            <Marco/>
            </div>
}

export default Inicio

