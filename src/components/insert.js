import { useState } from 'react';
import { db } from '../firebase-conf'
import { collection, addDoc } from 'firebase/firestore'
import { usuarioIniciado } from '../routes/Login'
import MicroModal from 'react-micro-modal';
export default function Insert() {
	const [newPost, setNewPost] = useState("");
	const userCollectionRef = collection(db, "Posts");
	let rel = 0;
	if (window.performance) {
		if (performance.navigation.TYPE_RELOAD === 2) {
			alert("This page is not reloaded");
		} else {
		}
	}
	const createPost = async () => {
		try {

			await addDoc(userCollectionRef, { username: usuarioIniciado[0], Post: newPost })
		} catch (err) {
			console.log(err)
		}

		alert("Se incerto correctamente")
	}
	return (
		<MicroModal trigger={(open) => <div onClick={open}><button class="button  is-floating is-primary">+</button></div>}>
			{(close) =>
				<>
					<div class="has-text-link">
						<p class="modal-card-title ">Insertar Post</p>
					</div>
					<br />
					<div class="field">
						<label class="label">Post</label>
						<div class="control">
							<textarea class="textarea" placeholder="Textarea" onChange={(event) => { setNewPost(event.target.value) }}></textarea>
						</div>
					</div>


					<button class="button is-success" onClick={createPost}>Save Post</button>
					<button class="button" onClick={close}>Cancel</button>



				</>
			}
		</MicroModal>

	);
}
/*
		<div class="modal" id="modal">
				<div class="modal-background"></div>
				<div class="modal-card">
					<header class="modal-card-head has-background-link">
						<p class="modal-card-title has-text-success-light">Insertar Post</p>
						<button class="delete" aria-label="close" data-bulma-modal="close"></button>
					</header>
					<section class="modal-card-body">
						<div class="field">
							<label class="label">Post</label>
							<div class="control">
								<textarea class="textarea" placeholder="Textarea" onChange={(event) => { setNewPost(event.target.value) }}></textarea>
							</div>
						</div>


					</section>
					<footer class="modal-card-foot has-background-link">
						<button class="button is-success" onClick={createPost}>Save Post</button>
						<button class="button" data-bulma-modal="close">Cancel</button>
					</footer>
				</div>
			</div>

*/
