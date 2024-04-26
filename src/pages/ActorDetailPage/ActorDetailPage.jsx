import { useParams } from 'react-router-dom';
import ActorDetailCard from '../../components/ActorDetailCard'

export default function ActorDetailPage({ movies }){
  // Get the actorName param from the URL
  // let { actorName } = useParams();
  // console.log("Actor Name:", actorName) // why are you undefined?

  // const moviesForActor = movies.filter(movie => movie.cast.includes(actorName));
  
  return (
    <>
      <h1>I tried to do the bonus! 😭😭😭 </h1>
      {/* <h1>{actorName} Movies</h1> */}
      {/* <div> */}
        {/* {moviesForActor.map((mov, index) => ( */}
            {/* <ActorDetailCard key={index} mov={mov} index={index} />
        ))} */}
      {/* </div> */}
    </>
)


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