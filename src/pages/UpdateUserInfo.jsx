import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import { Container, Button, Col, Row, Card, Form } from "react-bootstrap";

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
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-5 text-center text-uppercase ">Update User Form</h2>
                  <div className="mb-3">
                    <Form onSubmit={submitFormHandler}>
                      <Form.Group className="mb-3" >
                        <Form.Label className="text-center">Name</Form.Label>
                          <Form.Control 
                          onChange={updateState} 
                          value={state.name}  
                          name="name"  
                          placeholder="Name"
                          className="mb-2">
                          </Form.Control>
                       
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Label className="text-center">Email</Form.Label>
                          <Form.Control 
                          onChange={updateState} 
                          value={state.email}  
                          name="email" >
                          </Form.Control>
                       
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="secondary" type="submit">
                          Update
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );

};

export default UpdateUserInfo;