import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
// import Jumbotron from "b"

// function HomePage() {

//     return (
//         <div>

//             <div className="homePage">
//                 <h1>Stay Informed</h1>
//                 <p>Track live COVID-19 cases in TN</p>
//                 <button>
//                      <Link to={"/login"}> Login</Link>
//                 </button>
//             </div>

//         </div>
//     )
// }

// export default HomePage

function HomePage() {
  return (
    <div
      className="   
        jumbotron 
        d-flex 
        flex-column 
        justify-content-start
        align-items-center"
    >
      <div className="container mt-5 pt-5 align-items-center">
        <div className="container  w-70  pt-5 justify-content-start my-5">
          <h1 className="header text-white ">COVID-19 Tracker</h1>
          <p className="fs-1 my-2 pt-5">Stay informed.</p>
          <p className="fs-1 fw-lighter pb-5">Track cases in your county. </p>

          <Link className="me-2 " to={"/login"}>
            <button className="button">Login</button>
          </Link>

          <Link to={"/register"}>
            <button className="button">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
