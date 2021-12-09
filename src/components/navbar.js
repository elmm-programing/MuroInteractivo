import { Outlet, Link } from "react-router-dom";
export default function NavBar() {
	return (
		<nav class="navbar is-link" role="navigation" aria-label="main navigation">
			< div class="navbar-brand" >
				<a class="navbar-item is-size-4">
					<strong>Muro Interactivo</strong>

				</a>

				<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div >

			<div id="navbarBasicExample" class="navbar-menu">
				<div class="navbar-start">
				</div>
			</div>

			<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
						<Link to="/Login" class="button is-info">

							<strong>Inicia sesión</strong>
						</Link>
						<Link to="/Registrarse" class="button is-info">

							<strong>Regístrate</strong>
						</Link>

					</div>
				</div>
			</div>
		</nav >

	);
}
