import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";




function SignupPage(props) {

 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  
  const handleSignupSubmit = (e) => {
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, {
        email,
        name,
        password
    })
    .then(axiosResponse => {
        console.log(axiosResponse.data)
        navigate("/login")
    })
    .catch(err => console.log(err))
  };

  
  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>
    
      <form onSubmit={handleSignupSubmit}>
        <label>Name:</label>
          <br />
        <input 
          type="text"
          name="name"
          value={name}
          onChange={handleName}
        />
        <br />
        <label>Email:</label>
        <br />
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
        <br />
        <label>Password:</label>
        <br />
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <br />
       
        <button type="submit">Sign Up</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  )
}

export default SignupPage;
