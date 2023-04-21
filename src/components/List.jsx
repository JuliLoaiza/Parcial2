import { useContext } from "react";
import Context from '../context/Context.jsx'

function List() {
    const { post, loading, error } = useContext(Context)
    if (pading) {
        return
        <h1>Loading</h1>;
    }
    if (error) {
        return
        <h1>Se ha producido un error: {console.error()}</h1>;
    }
    return (
        <div>
			<h1>Posts:</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</li>
				))}
			</ul>
		</div>
    )
}export default List;

