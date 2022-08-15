import { useState } from 'react';
import { Route, Routes,} from 'react-router-dom';
import { MovieData } from "./Components/MovieData";
import MovieList from "./Components/MovieList";
import NavBar from "./Components/NavBar";
import AddMovie from "./Components/AddMovie";
import Trailler from './Components/Trailler';





function App() {
 
  const [movies, setMovies] = useState(MovieData);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(0);

  return (
    <div style={{ backgroundColor: 'grey'}}>
    <Routes>
   <Route  path="/" element={
            
              <div>
                <NavBar
                  nameSearch={nameSearch}
                  ratingSearch={ratingSearch}
                  movies={movies}
                  setMovies={setMovies}
                  NameSearch={setNameSearch}
                  RatingSearch={setRatingSearch}
                />
                <MovieList
                  movies={movies}
                  nameSearch={nameSearch}
                  ratingSearch={ratingSearch}
                />
                <AddMovie movies={movies} setMovies={setMovies} />
                </div> 
              } />

                <Route path="/:id" element={<Trailler  movies={movies}/>}/>
                </Routes>
                </div>
                );
                }


export default App;
