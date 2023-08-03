
import { useAuth } from "../contexts/AuthContext";
import { useUser } from "../contexts/UserContext";

export function DeleteButton(){

    const {user, logout, isAdmin} = useAuth();
    const { removeUserDetails } = useUser();

    const deleteProfile = () => {
        removeUserDetails(user)
        logout();
        console.log("User Removed")
    }

    const removeAccount = () => {
        // Logic function to make delete request to backend still to be implemented
        removeUserDetails();
        console.log("User Removed");
    }

    return(
        <button onClick={deleteProfile}>Remove Account</button>
    )
}