import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard(){

    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
            navigate("/");
        }
    }, [user]);
    


    return(
        <>
            {/* Render User Dashboard component */}
            <main>
                <Outlet />
            </main>
        </>
        
        
    )
}