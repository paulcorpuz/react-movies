import {Link} from 'react-router-dom'

export default function NavBar({user}) {
  return (
    <nav>
      <h1>NavBar: Welcome {user.username}</h1>
      <Link to="/">Movies List</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actor List</Link>
    </nav>
  );
}