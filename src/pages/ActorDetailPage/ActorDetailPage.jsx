import { useParams } from 'react-router-dom';


export default function ActorDetailPage({ movies }){
  // Get the actorName param from the URL
  // const { actorName  } = useParams();
  // console.log("Actor Name:", actorName) // why are you undefined?

  // Find the actor object from the actors array based on the actor's name
  // const moviesForActor = movies.find(movie => movie.cast.includes(actorName));
  
  return (
    <div>
      <h1>I TRIED 😭😭😭</h1>
      {/* <h2>{actorName}</h2> */}
    </div>

  );
}


// TODO: WIP


// export default function ActorDetailPage({ movies }){
//   // Get the actorName param from the URL
//   const { actorName  } = useParams();
//   console.log("Actor Name:", actorName)

//   // Find the actor object from the actors array based on the actor's name
//   const moviesForActor = movies.find(mov => mov.cast.includes(actorName));
  
//   return (
//     <div>
//       <h1>{actorName}</h1>
//       <h2>Movies:</h2>
//       <ul>
//         {moviesForActor.map(movie => (
//           <li key={movie.title}>{movie.title}</li>
//         ))}
//       </ul>
//     </div>

//   );
// }