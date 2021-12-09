import Posts from '../components/Posts'
import Insert from '../components/insert'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { usuarioIniciado } from './Login'
export default function Index() {
	const navigate = useNavigate();
	let user = 0;
	console.log(usuarioIniciado);
	if (usuarioIniciado !== undefined) {
		console.log(usuarioIniciado)
		user = usuarioIniciado[0];
	}


	useEffect(() => {
		if (usuarioIniciado !== undefined) {
			console.log(usuarioIniciado)
		} else {
			navigate('/Login');
		}


	}, [navigate])
	const logOut = () => {
		navigate('/Login');
	}

	return (
		<>
			{/* navbar*/}
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
						<strong class="has-text-white">{user}</strong>

					</div>
					<div class="navbar-item">
						<div class="buttons">
							<button class="button is-danger" onClick={logOut}>

								<strong>Cerrar sesión</strong>
							</button>

						</div>
					</div>
				</div>
			</nav >


			{/* body*/}
			<div class="columns is-mobile is-centered ">
				<div class="column is-half">
					<Posts />
				</div>

			</div>
			<Insert />

		</>
	);
}
