import ActorCard from "../../components/ActorCard";

export default function ActorListPage({ movies }) {
	let result = []

	// push all the actors to a new empty array called "result"
	movies.map((movie) => (
		movie.cast.map((item) => (
			result.push(item)
		)
		)
	))

  // Create a set from the array to remove duplicates
  const actorSet = new Set(result);
  // Convert set back to array
  const uniqueActors = Array.from(actorSet);
  console.log(uniqueActors)

  return (
    <div>
			<h1>ActorList Page</h1>
      {uniqueActors.map((actor, index) => (
        <ActorCard actor={actor} key={index}/>
      ))}
    </div>
  );
};