import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context"




function ProfilePage() {

    const { user, logOutUser } = useContext(AuthContext)

    const deleteUser = () => {
        

        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/auth/delete`, {
            headers:{
                authorization: `Bearer ${localStorage.getItem("authToken")}`
            }
        })
            .then(() => {
           
              logOutUser();
            })
            .catch((err) => {
              console.error(err);
            });
    }

    return (
        <main className="container-fluid">
            {/* <h2>PROFILE PAGE</h2> */}
            <div className="row">
                    {user ? (
                        <div className="col-12">
                            <h3>User Information</h3>
                           
                            <h4>Name:   {user.name}</h4>
                            <h4>Email:   {user.email}</h4>
                            <div>
                            <Link to={"/update"}> Update Email or Password</Link>
                            <br/>
                            <br/>
                            <Link to={"/dashboard"}> Dashboard</Link>
                            <br/>
                            <br/>
                            <button className="buttonForm" onClick={deleteUser}>Delete Account</button>
                            </div>
                        </div>
                        
                    ) : <p>loading ...</p>}
                        
                        
                        
                    </div>
                
          
        </main>
    )
}

export default ProfilePage