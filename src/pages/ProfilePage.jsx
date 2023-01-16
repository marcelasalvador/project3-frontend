import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Container, Button, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function ProfilePage() {
  const { user, logOutUser } = useContext(AuthContext);

  const deleteUser = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/auth/delete`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then(() => {
        logOutUser();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  {user ? (
                    <div className="col-12 text-center">
                      <h2 className="fw-bold mb-5 text-center text-uppercase ">User Information</h2>

                      <p className="fs-5"><strong>Name:</strong> {user.name}</p>
                      <p className="mb-5 fs-5"><strong>Email:</strong> {user.email}</p>
                      <div>
                        <Link  to={"/update"} className="text-secondary"> Update Email or Password</Link>
                        <br />
                        <Link to={"/dashboard"} className="text-secondary"> Dashboard</Link>
                        <br />
                        <br />
                        <Button type="button" variant="secondary"  onClick={deleteUser}>
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <p>loading ...</p>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfilePage;
