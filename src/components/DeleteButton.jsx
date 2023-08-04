import { useAuth } from "../contexts/AuthContext";
import { useUser } from "../contexts/UserContext";
import { removeUserFromDatabase } from "../services/UserServices";


export function DeleteButton(){

    const {user, logout, isAdmin} = useAuth();
    const { removeUserDetails } = useUser();

    // Calls functions to remove user from database and front end
    const deleteProfile = () => {
        removeUserFromDatabase(user)
        .then(data => console.log(data))
        .catch(error => console.log(error));
        removeUserDetails()
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