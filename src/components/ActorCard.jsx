import { Link } from 'react-router-dom'

export default function ActorCard({ actor }) {
  const randomPictureNum = Math.floor(Math.random() * 101);

  return (
    <div className="ActorCard">
          <h2>{actor}</h2>
          <Link to={`/actors/${actor}`}>
            <img src={`https://picsum.photos/200?random=${randomPictureNum}`} alt={`${actor}`} />
          </Link>
    </div>
  );
};




// https://picsum.photos/

























// {movies.cast.map((actor, index) => (
//   <ActorCard movie={movie} key={index} result={result} />


//   export default function ActorCard({ movie }) {
//     return (
//       <div className="ActorCard">
//         <h1>Actors:</h1>
//         {movie.cast.map((actor, index) => (
//           <div key={index} className="Actor">
//             <h2>{actor}</h2>
//             <img src={`https://picsum.photos/200?random=${index}`} alt={`Actor ${index}`} />
//           </div>
//         ))}
//       </div>
//     );
//   }