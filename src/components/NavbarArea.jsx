import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavbarArea() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="lg" className="fixed-top mb-5">
      <Container>
        <Navbar.Brand className="mr-auto ont-size: larger" href="/">
          901 Covid-19 Tracker
        </Navbar.Brand>
        <p></p>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-center align-items-center">
            {!isLoggedIn && (
              <>
                <Nav.Link href="/signup">Signup</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}

            {isLoggedIn && (
              <>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link onClick={logOutUser}>Logout</Nav.Link>
              </>
            )}
            {isLoggedIn && (
              <p className=" welcomeMessage fw-bold m-auto p-2">
                Welcome, {user.name}
              </p>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarArea;
