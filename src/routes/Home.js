import Posts from '../components/Posts'
import Navbar from '../components/navbar'
export default function Home() {
	return (
		<>
			<Navbar />
			<hr />
			<div class="columns is-mobile is-centered ">
				<div class="column is-half">
					<Posts />
				</div>
			</div>
		</>
	);
}
