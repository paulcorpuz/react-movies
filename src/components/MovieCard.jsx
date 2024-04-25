import { Link } from 'react-router-dom'

export default function MovieCard({ movie }) {
  return (
    <div className="MovieCard">
      <h1>{movie.title}</h1>
      <h2>Release Date: {movie.releaseDate}</h2>
      <Link to={`/movies/${movie.title}`}>
        <img src={movie.posterPath} alt="Movie Poster" />
      </Link>

    </div>
  );
};

