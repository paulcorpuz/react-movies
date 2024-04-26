export default function ActorDetailCard({ mov }) {
  return (

    <div >
      <h5><strong>{mov.title}</strong></h5>
      <img src={mov.posterPath} alt="" />

      <p>Release Date: {mov.releaseDate}</p>
    </div>
  )
}