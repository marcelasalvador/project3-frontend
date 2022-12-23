// src/pages/SignupPage.js

import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";


function LoginPage(props) {

  const {storeToken, authenticateUser} = useContext(AuthContext)
  const {userId} = useParams()
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  // const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
        name,
        email,
        password
    })
    .then(axiosResponse => {
        storeToken(axiosResponse.data.authToken)
        authenticateUser()
        navigate("/")
    })
    .catch(err => console.log(err))
  };

  // useEffect(() => {
  //   handleLoginSubmit()
  // },[userId])

  
  return (
    <div className="LoginPage">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <br/>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
        <br/>
        <label>Password:</label>
        <br/>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <br/>


        <button type="submit">Login</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Don't have account?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  )
}

export default LoginPage;
