import { useEffect } from "react";
import { useUser } from "../contexts/UserContext";


// Displays user details for the edit profile and admin pages
export default function SingleUser(){
    const {userDetails} = useUser();

    return(
        <div className="text-white">
            <p>{userDetails.firstName}</p>
            <p>{userDetails.lastName}</p>
            <p>{userDetails.email}</p>
            <p>{userDetails.userName}</p>
        </div>
    )
}