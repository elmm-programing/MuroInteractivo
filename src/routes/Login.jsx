import { useEffect, useState } from 'react';
import { db } from '../firebase-conf'
import { collection, getDocs } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";


export let usuarioIniciado;
export default function Login() {
	const [users, setUsers] = useState([]);
	const [newUsername, setNewUsername] = useState("");
	const [newClave, setNewClave] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
		const userCollectionRef = collection(db, "users");
		const getUsers = async () => {
			const data = await getDocs(userCollectionRef);
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
		}
		getUsers();
	}, [])
	const verificar = () => {
		console.log(users);
		let session = false;
		users.map((user) => {
			if (newUsername === user.usuario && newClave === user.clave) {
				session = true
				usuarioIniciado = [newUsername, newClave];
			}

		})
		console.log(usuarioIniciado[1]);

		if (session === true) {
			alert("Se inicio session correctamente")
			navigate('/index', usuarioIniciado);
		} else {
			alert("Los datos son incorrectos")
		}

	}

	return (
		<div class="columns is-mobile is-centered  mt-6">
			<div class="column is-two-fifths has-background-info">

				<h1 class="  is-size-4"><strong class="has-text-info-light">Login</strong></h1>
				<div class="field">
					<label class="label has-text-info-light">Username</label>
					<div class="control">
						<input class="input" type="text" placeholder="Username" onChange={(event) => { setNewUsername(event.target.value) }} />
					</div>
				</div><div class="field">
					<label class="label has-text-info-light">Password</label>
					<div class="control">
						<input class="input" type="password" placeholder="Password" onChange={(event) => { setNewClave(event.target.value) }} />
					</div>
				</div>
				<div class="control">
					<button onClick={verificar} class="button is-primary">Log in</button>
				</div>
			</div>
			<div class="column is-two-fifths has-background-link">
				<h1 class="  is-size-2 has-text-centered pt-6 mt-6"><strong class="has-text-info-light ">Muro Interactivo</strong></h1>
			</div>
		</div>
	);
}

