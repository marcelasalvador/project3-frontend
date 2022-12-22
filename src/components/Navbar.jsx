import { Link } from "react-router-dom";
import { useContext } from "react";                     
import { AuthContext } from "../context/auth.context";

function Navbar() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
   
      {isLoggedIn && (
        <span>Welcome, {user.name}</span>
      )}

      <Link to="/">
        <button>Home</button>
      </Link>

      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}

      {isLoggedIn && (
        <>
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
          <Link to="/profile"> 
          <button>Profile</button> 
          </Link>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}
      
    </nav>
  )
  
}

export default Navbar;