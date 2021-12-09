import { useEffect, useState } from 'react';
import { db } from '../firebase-conf'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";
export default function Registrarse() {
	const [newUsername, setNewUsername] = useState("");
	const [newClave, setNewClave] = useState("");
	const [newName, setNewName] = useState("");
	const [newLasName, setNewLastName] = useState("");
	const userCollectionRef = collection(db, "users");
	const navigate = useNavigate();
	const createUser = async () => {
		await addDoc(userCollectionRef, { usuario: newUsername, clave: newClave, nombre: newName, apellido: newLasName })
		navigate('/Login');
	}
	return (
		<div class="columns is-mobile is-centered  mt-5">
			<div class="column is-two-fifths has-background-info">

				<h1 class="  is-size-4"><strong class="has-text-info-light">Regístrate</strong></h1>
				<div class="field">
					<label class="label has-text-info-light">Nombre de Usuario:</label>
					<div class="control">
						<input class="input" type="text" placeholder="Nombre de Usuario" onChange={(event) => { setNewUsername(event.target.value) }} />
					</div>
				</div>
				<div class="field">
					<label class="label has-text-info-light">Contraseñas:</label>
					<div class="control">
						<input class="input" type="password" placeholder="Contraseñas" onChange={(event) => { setNewClave(event.target.value) }} />
					</div>
				</div>
				<div class="field">
					<label class="label has-text-info-light">Nombre:</label>
					<div class="control">
						<input class="input" type="text" placeholder="Nombre" onChange={(event) => { setNewName(event.target.value) }} />
					</div>
				</div>			<div class="field">
					<label class="label has-text-info-light">Apellido</label>
					<div class="control">
						<input class="input" type="text" placeholder="Apellido" onChange={(event) => { setNewLastName(event.target.value) }} />
					</div>
				</div>
				<div class="control">
					<button onClick={createUser} class="button is-primary">Regístrate</button>
				</div>
			</div>
			<div class="column is-two-fifths has-background-link">
				<h1 class="  is-size-2 has-text-centered pt-6 mt-6"><strong class="has-text-info-light ">Muro Interactivo</strong></h1>
			</div>
		</div>

	);
}
