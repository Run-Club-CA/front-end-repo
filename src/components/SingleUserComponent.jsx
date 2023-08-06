
import { useUser } from "../contexts/UserContext";

// Displays user details for the edit profile and admin pages
export default function SingleUser(){
    const {userDetails} = useUser();
    // conditional render, changes layout of page if user is admin or not
    
    return(
        <div className="flex flex-col text-white items-center">
            <p>first Name: <strong>{userDetails.firstName}</strong></p>
            <p>last Name: <strong>{userDetails.lastName}</strong></p>
            <p>email: <strong>{userDetails.email}</strong></p>
            <p>username: <strong>{userDetails.userName}</strong></p>
        </div>
    )
}