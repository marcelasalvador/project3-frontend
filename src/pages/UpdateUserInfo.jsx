import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

const UpdateUserInfo = (props) => {

    const navigate = useNavigate()

    const { user, storeToken, authenticateUser } = useContext(AuthContext)
  
  const [state, setState] = useState({
    name: user.name,
    email: user.email,
  });

  const updateState = e => setState({
    ...state,
    [e.target.name]: e.target.value
  });

  const submitFormHandler = e => {
    e.preventDefault();
    console.log('form submit works');
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/auth/update`, {
        name: state.name,
        email: state.email,
    }, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('authToken')}`
        }
    })
      .then(axiosResponse => {
        console.log(axiosResponse.data);
        storeToken(axiosResponse.data.authToken)
        authenticateUser()
        navigate('/profile')

        //props.handleLoginSubmit();
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Update Project Form</h1>
      <form onSubmit={submitFormHandler}>
        <label>Name</label>
        <input onChange={updateState} value={state.name} name="name" />
        <label>Email</label>
        <input onChange={updateState} value={state.email} name="email" />
        <button>Update Project</button>
      </form>
    </div>
  );

};

export default UpdateUserInfo;