import React from 'react';
import MovieCard from "./MovieCard";

const MovieList=({movies, nameSearch, ratingSearch})=> {

    const search = () => {
       return movies.filter(
            (film) => {
              return (
                ratingSearch === 0 ?
                film.name.toLowerCase().includes(nameSearch.toLowerCase()):
                Number(film.rating) === ratingSearch && film.name.toLowerCase().includes(nameSearch.toLowerCase())

                     )

                      }
                        )
}


return <div style={{display: 'flex',flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>

    { 
      search().map((movie) => <MovieCard movie={movie} key={movie.id} />) 
     
      }
    </div>
    

}


export default MovieList;
