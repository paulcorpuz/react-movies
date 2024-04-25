import MovieCard from "../../components/MovieCard";

export default function MoviesListPage({ movies }) {
  return (
    <div>
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
  );
};