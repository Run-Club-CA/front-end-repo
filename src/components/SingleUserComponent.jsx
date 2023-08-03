import { useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import { useAuth } from "../contexts/AuthContext";


// Displays user details for the edit profile and admin pages
export default function SingleUser(){
    const {userDetails} = useUser();
    const {isTrainer, isAdmin} = useAuth();
    console.log(isAdmin)
    // conditional render, changes layout of page if user is admin or not
    if(isAdmin === true){
        return(
            <div className="text-white">
                <p>{userDetails.firstName}</p>
                <p>{userDetails.lastName}</p>
                <p>{userDetails.email}</p>
                <p>{userDetails.userName}</p>
                <p>{isTrainer}</p>
            </div> 
        )
    } else {
        return(
            <div className="text-white">
                <p>{userDetails.firstName}</p>
                <p>{userDetails.lastName}</p>
                <p>{userDetails.email}</p>
                <p>{userDetails.userName}</p>
            </div>
        )
    }
}