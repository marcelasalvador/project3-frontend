import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

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
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={6}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Login
                  </h2>
                  <div className="mb-3">
                    <Form  onSubmit={handleLoginSubmit}>
                      

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleEmail}
                          placeholder="Enter email"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={password}
                          onChange={handlePassword}
                          placeholder="Password"
                        />
                      </Form.Group>
                      
                      <div className="d-grid">
                        <Button variant="secondary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      
                    { errorMessage && <p className="error-message">{errorMessage}</p> }
                      
                      <p className="mb-0  text-center">
                      Don't have account?{" "}
                        <a href={"/signup"} className="text-secondary fw-bold">
                          Register
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage



// // src/pages/SignupPage.js

// import { useState, useEffect, useContext } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../context/auth.context";


// function LoginPage(props) {

//   const {storeToken, authenticateUser} = useContext(AuthContext)
//   const {userId} = useParams()
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState(undefined);

//   // const handleName = (e) => setName(e.target.value);
//   const handleEmail = (e) => setEmail(e.target.value);
//   const handlePassword = (e) => setPassword(e.target.value);

  
//   const handleLoginSubmit = (e) => {
//     e.preventDefault()
//     axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
//         name,
//         email,
//         password
//     })
//     .then(axiosResponse => {
//         storeToken(axiosResponse.data.authToken)
//         authenticateUser()
//         navigate("/")
//     })
//     .catch(err => console.log(err))
//   };

//   // useEffect(() => {
//   //   handleLoginSubmit()
//   // },[userId])

  
//   return (

    
//     <div className="d-flex justify-content-center text-center mt-5">
//     <div className="LoginPage">
//       <h1 className="display-4">Login</h1>

//       <form className="mt-5" onSubmit={handleLoginSubmit}>
//         <label>Email:</label>
//         <br/>
//         <input 
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleEmail}
//         />
//         <br/>
//         <label className="mt-3">Password:</label>
//         <br/>
//         <input 
//           type="password"
//           name="password"
//           value={password}
//           onChange={handlePassword}
//         />
//         <br/>


//         <button className="buttonForm w-50 mt-4 mb-3" type="submit">Login</button>
//       </form>

//       { errorMessage && <p className="error-message">{errorMessage}</p> }

//       <p className="fs-6">Don't have account?</p>
//       <Link to={"/signup"}> Sign Up</Link>
//     </div>
//     </div>
//   )
// }

// export default LoginPage;
