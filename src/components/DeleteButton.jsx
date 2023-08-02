
import { useAuth } from "../contexts/AuthContext"

export function DeleteButton(){

    const {logout} = useAuth();

    const deleteProfile = () => {
        logout();
        console.log("User Removed")
    }

    return(
        <button onClick={deleteProfile}>Remove Account</button>
    )
}