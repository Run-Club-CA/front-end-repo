import { useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import { useAuth } from "../contexts/AuthContext";
import { getUser } from "../services/UserServices";

// Renders with the user's name, logout and edit profile links
export default function DashBoardComponent(props) {

    const {userDetails, storeUserDetails, removeUserDetails} = useUser();
    const {user, logout} = useAuth();

    // useEffect hook to get user details and store them in local storage
    // Uses the supplied JWT that relates to the current user
    useEffect(() => {
        console.log(user)
        getUser(user)
        .then(data => storeUserDetails(data))
        .catch(error => console.log(error));
        console.log(userDetails);
    }, []);

    const logoutUser = () => {
        logout();
        removeUserDetails();
    }

    return(
        <div className="text-white bg-grey-div mx-auto my-10 w-mobile-width h-mobile-height p-4 rounded-main-div shadow-mobile-shadow">
            <h1>Welcome! {userDetails.firstName || "Testname"}</h1>
            <a href="/dashboard/profile">Edit Profile</a>
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
}