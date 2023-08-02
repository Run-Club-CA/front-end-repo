import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext"

export function DeleteButton(){

    const {logout} = useAuth();
    const navigate = useNavigate();

    const deleteProfile = () => {
        logout();
        
    }

    return(
        <button onClick={deleteProfile}>Remove Account</button>
    )
}