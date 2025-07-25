import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import IniciarSesion from "./pages/IniciarSesion.jsx";
import CrearCuenta from './pages/CrearCuenta.jsx'
import Home from './pages/Home.jsx'

function App(){
	return (
		<Routes>
			<Route path="/" element = {<Inicio />}/>
			<Route path="/IniciarSesion" element = {<IniciarSesion />}/>
			<Route path="/CrearCuenta" element = {<CrearCuenta />}/>
			<Route path="/Home" element = {<Home />}/>
		</Routes>
	)
}

export default App