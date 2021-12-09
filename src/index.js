import { render } from "react-dom";
import "bulma/css/bulma.min.css";
import 'bulma-floating-button/dist/css/bulma-floating-button.min.css'
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import Login from './routes/Login'
import Home from './routes/Home'
import Index from './routes/index'
import Registrarse from './routes/Registrarse'

const rootElement = document.getElementById("root");
render(<BrowserRouter>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="Login" element={<Login />} />
		<Route path="Registrarse" element={<Registrarse />} />
		<Route path="Index" element={<Index />} />
	</Routes>
</BrowserRouter>, rootElement);
