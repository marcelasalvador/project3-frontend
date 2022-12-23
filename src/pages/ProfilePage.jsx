import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context"




function ProfilePage() {

    const { user, logOutUser } = useContext(AuthContext)

    const deleteUser = () => {
        //some type of axios request to a backend route to delete the user
        //make sure to include the token in the headers of the request
        //inside the .then of your axios request make sure to use
        //the logOutUser function once the user has been delete

        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/auth/delete`, {
            headers:{
                authorization: `Bearer ${localStorage.getItem("authToken")}`
            }
        })
            .then(() => {
            //   localStorage.removeItem("authToken");
              logOutUser();
            })
            .catch((err) => {
              console.error(err);
            });
    }

    return (
        <main >
            <h2>PROFILE PAGE</h2>
            <div >
                    {user ? (
                        <div>
                            <h3>User Information</h3>
                            <h4>Name:{user.name}</h4>
                            <h4>Email:{user.email}</h4>
                            <div>
                            <Link to={"/update"}> Update Email or Password</Link>
                            
                            <Link to={"/dashboard"}> My Dashboard</Link>
                            <button onClick={deleteUser}>Delete Account</button>
                            </div>
                        </div>
                        
                    ) : <p>loading ...</p>}
                        
                        
                        
                    </div>
                
          
        </main>
    )
}

export default ProfilePage