import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DashBoardComponent from "../components/DashboardComponent";
import { useUser } from "../contexts/UserContext";
import { getUser } from "../services/UserServices";

export default function Dashboard(){
    
    const {user} = useAuth();
    const {userDetails, storeUserDetails} = useUser();
    const navigate = useNavigate(); 

    useEffect(() => {
        if (user === null) {
            navigate("/");
        }
    }, [user]);


    return(
        <>
            <DashBoardComponent />
            <main>
                <Outlet />
            </main>
        </>
        
        
    )
}