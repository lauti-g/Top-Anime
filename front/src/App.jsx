function Boton({texto}) {
    return <button className="boton">
        {texto}
    </button>
}

export function App () {
    return  <div className="marco" >
                <Boton texto = "Crear cuenta"/>
                <Boton texto = "Iniciar sesion"/>
                <Boton texto = "Continuar como invitado"/>
            </div>
}