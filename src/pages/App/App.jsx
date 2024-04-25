import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import ActorDetailPage from '../ActorDetailPage/ActorDetailPage';
import NavBar from '../../components/NavBar';
import { movies } from "../../data.js";
import './App.css';


export default function App() {
  const [user, setUser] = useState(null)
  // console.log(user)

  function addUser(username) {
    setUser(username); // Replace state, don't mutate it
  }

  // Get the movieName param from the URL.
  let { MovieName } = useParams();

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user}/>
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route path="/movies/:MovieName" element={< MovieDetailPage movies={movies}/>} />
            <Route path="/actors" element={<ActorListPage movies={movies} />} />
            <Route path="/actors/:ActorName" element={<ActorDetailPage movies={movies} />} />
          </Routes>
        </>
      :
      <LoginPage addUser={addUser}/>
      }
    </main>
  );
}



