import { useEffect, useState } from 'react';
import { db } from '../firebase-conf'
import { collection, getDocs } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Post() {
	const [users, setUsers] = useState([]);
	const userCollectionRef = collection(db, "Posts");
	const getUsers = async () => {
		const data = await getDocs(userCollectionRef);
		setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

	}
	useEffect(() => {

		getUsers();
	}, [])
	return (
		<div className="App">
			<div class=" has-text-centered">
				<button class="button  is-medium  is-primary" onClick={getUsers}>
					Refrezcar

				</button></div>
			{
				users.map((user) => {
					return (
						<div class="mb-5">
							<div class="card ">
								<header class="card-header has-background-link "  >
									<p class="card-header-title has-text-success-light ">
										{user.username}
									</p>
								</header>
								<div class="card-content">
									<div class="content">
										{user.Post}
									</div>
								</div>

							</div>

						</div>

					)
				})
			}
		</div >
	);
}

export default Post;
