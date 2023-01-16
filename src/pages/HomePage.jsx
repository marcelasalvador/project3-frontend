import { Link } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../context/auth.context";



function HomePage() {

  const { isLoggedIn} = useContext(AuthContext);

  return (
  
    <div
      className="   
        jumbotron 
        d-flex 
        flex-column 
        justify-content-start
        align-items-center"
    >
      <div className="container mt-5 pt-5 align-items-center ">
        <div className="container w-100  pt-5 justify-content-start my-5">
          <h1 className="header display-4 fw-bolder text-white soft-text-shadow ">901 COVID-19 Tracker</h1>
          <p className="fs-1  my-2 pt-5 soft-text-shadow">Stay informed.</p>
          <p className="fs-1 fw-bold pb-5 soft-text-shadow">Track Shelby county data. </p>

          {!isLoggedIn && (
            <>
          <Link className="me-2 " to={"/login"}>
            <button className="button">Login</button>
          </Link>
          <Link to={"/signup"}>
            <button className="button">Signup</button>
          </Link>
          </>
          )}
          
          {isLoggedIn && (
            <>
          <Link className="me-2 " to={"/dashboard"}>
            <button className="button">Data Dashboard</button>
          </Link>
          <Link className="me-2 " to={"/profile"}>
            <button className="button">User Profile</button>
          </Link>

          </>
          )}

        </div>
      </div>
    </div>

  );
}



export default HomePage;
