import { useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import { useAuth } from "../contexts/AuthContext";

// Renders with the user's name, logout and edit profile links
export default function DashBoardComponent(props) {

    const {userDetails} = useUser();
    const {logout} = useAuth();

    // useEffect(())

    return(
        <div className="text-white bg-grey-div mx-auto my-10 w-mobile-width h-mobile-height p-4 rounded-main-div shadow-mobile-shadow">
            <h1>Welcome! {userDetails.firstName || "Testname"}</h1>
            <a href="/dashboard/profile">Edit Profile</a>
            <button onClick={logout}>Logout</button>
        </div>
    )
}