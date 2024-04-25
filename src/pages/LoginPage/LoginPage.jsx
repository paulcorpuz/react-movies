import { useState } from 'react';

export default function LoginPage({addUser}){
  const [updateUser, setUpdateUser] = useState({
    username: "",
    password: "",
  })

  function handleChange(evt) {
    // replace object state with a new object and use a computes property to update the correct state property
    const { name, value } = evt.target;
    console.log(name, value)
    setUpdateUser({...updateUser, [name]: value });
  }

  console.log("Update User", updateUser)


  function handleSubmit(evt) {
    evt.preventDefault(); // if you're using forms/onsubmit, you have to use the prevetDefault
    addUser(updateUser); // Pass the new skill data to the parent component
    setUpdateUser({ username: "", password: "" }); // Reset the form after submission
  }

  return(
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Username" 
        name="username" 
        value={updateUser.username} 
        onChange={handleChange} 
      />

      <br />
      <input 
        type="password" 
        placeholder="Password" 
        name="password" 
        value={updateUser.password} 
        onChange={handleChange} 
      />

      <br />
      <button type="submit">Login</button>
      </form>
    </div>
  );
}