import React from 'react';
import { useState, useEffect } from 'react';
import { Context } from './context/Context';
import  List  from './components/List.jsx';
import  Reducer  from './components/Reducer.jsx';
import { useFetch } from './components/useFetch';

function App() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Se ha producido un error: {console.error()}</div>;
  }

  return (
    <Context reducer={Reducer} initialState={[]}>
      <h1>Lista Posts</h1>
      <div className="App">
        <List posts={posts} />
      </div>
    </Context>
  );
}

export default App;
