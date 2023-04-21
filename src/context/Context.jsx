import { createContext, useEffect, useState } from "react";

export const Context = ({children}) => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [error, setError] = useState([null]);
    useEffect(()=>{
        setLoading(true);

		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((posts) => {
				setPosts(post);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, []);
    return <Context.Provider value={{ post, loading, error }}>
    {children}
</Context.Provider>
}
export default Context;
