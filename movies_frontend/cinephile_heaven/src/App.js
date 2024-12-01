import './App.css';

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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

