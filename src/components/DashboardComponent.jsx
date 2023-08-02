import { useEffect, useState } from "react";

// Renders with the user's name, logout and edit profile links
export default function DashBoardComponent(props) {

    const [userName, setUsername] = useState("TestName");

    // useEffect(())

    return(
        <div className="text-white bg-grey-div mx-auto my-10 w-mobile-width h-mobile-height p-4 rounded-main-div shadow-mobile-shadow">
            <h1>Welcome! {userName}</h1>
            {/* Edit Profile button */}
            {/* Logout button */}
            {/* Distance metrics(if time allows) */}
        </div>
    )
}