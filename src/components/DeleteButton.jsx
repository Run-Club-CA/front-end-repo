import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import { useUser } from "../contexts/UserContext";
import { removeUserFromDatabase } from "../services/UserServices";


export function DeleteButton(){

    const {user, logout} = useAuth();
    const { removeUserDetails } = useUser();

    // Calls functions to remove user from database and front end
    const deleteProfile = () => {
        removeUserFromDatabase(user)
        .then(data => (data === "User removed") ? toast.success("User removed") : toast.error("Error occurred"))
        .catch(error => console.log(error));
        removeUserDetails()
        logout();
        toast.success("User Removed")
    }

    return(
        <div className="flex flex-col justify-center mt-3">
            <p className="mx-auto"><strong>Warning this will remove the account</strong></p>
            <button onClick={deleteProfile} className="mx-auto mt-2 bg-red-500 hover:bg-red-700 text-white text-center font-bold py-1 px-2 rounded">Remove Account</button>
        </div>
        
    )
}