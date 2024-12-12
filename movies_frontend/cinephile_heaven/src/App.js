import React from 'react';
import Movies from './components/Movies';
import './App.css';
<<<<<<< HEAD
=======

import {Routes , Route} from 'react-router-dom';
import api from './api/axiosConfig';
import { useState , useEffect } from 'react';

//links or pages
import Layout from './components/layout';
import Home from './components/Home/home';


function App() {

  const [movies , setMovies] = useState();

  const getMovies=async() =>{

    try{

      const response = await api.get("/api/movies");
      //console.log(response.data);
      setMovies(response.data);

    }catch(err){
      console.log("Error fetching movies:", err);
    }

  }

  useEffect(() =>{
    getMovies();
  } , [])
>>>>>>> 5c4cb7fe03ff652749d285c6b7e91f6b0ee61395

const App = () => {
  return (
    <div className="App">
<<<<<<< HEAD
      <h1>Movie Reviews</h1>
      <Movies />
=======
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
>>>>>>> 5c4cb7fe03ff652749d285c6b7e91f6b0ee61395
    </div>
  );
};

export default App;

