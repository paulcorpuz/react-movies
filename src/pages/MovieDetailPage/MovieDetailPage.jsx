import { useParams } from 'react-router-dom';


export default function MovieDetailPage({movies}){
	// Get the movieName param from the URL.
  let { MovieName } = useParams();
	console.log("Movie Name:", MovieName)
	
  const movie = movies.find(mov => mov.title === MovieName)

  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>Release Date: {movie.releaseDate}</h2>
      <img src={movie.posterPath} alt="Movie Poster" />
      <h4>Staring: </h4>
      <p>{movie.cast.join(' 😀 ')}</p>
    </div>



  );
}



//for finding the movie, you still need to pass the movies prop to access it, but need to use find to match MovieName with mov.title 
// https://www.geeksforgeeks.org/different-ways-to-search-an-item-in-an-array-in-javascript/
// array.find(function(currentValue, index, arr), thisValue);
// const greaterElement = arr.find(ele => ele > 50);



// https://reactrouter.com/en/main/hooks/use-params
// https://medium.com/geekculture/how-to-use-react-router-useparams-436851fd5ef6