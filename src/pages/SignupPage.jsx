import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

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
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, {
        email,
        name,
        password,
      })
      .then((axiosResponse) => {
        console.log(axiosResponse.data);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6}  xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Signup
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSignupSubmit}>
                      <Form.Group
                        className="mb-3"
                        controlId="Name"
                     
                      >
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={name}
                          onChange={handleName}
                          placeholder="Enter Name"
                        />
                      </Form.Group>

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
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      
                    { errorMessage && <p className="error-message">{errorMessage}</p> }
                      
                      <p className="mb-0  text-center">
                        Already have an account??{" "}
                        <a href={"/login"} className="text-secondary fw-bold">
                         Login
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

export default SignupPage
