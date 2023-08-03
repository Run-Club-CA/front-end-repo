import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import SingleUser from "../components/SingleUserComponent";
import { DeleteButton } from "../components/DeleteButton";
import { ChangeStatus } from "../components/EditUserStatus";
import { useEffect } from "react";


export default function AdminUserPage(){
    const {isAdmin} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAdmin){
            navigate("/dashboard");
        }
    }, []);

    return(
        <div>
            <p>Checking to see if this page is rendering</p>
            <SingleUser />
            <ChangeStatus />
            <DeleteButton />
        </div>
    )
}