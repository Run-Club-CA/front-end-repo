import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DashBoardComponent from "../components/DashboardComponent";
import { useUser } from "../contexts/UserContext";
import CardContainer from "../components/EventsCardContainer";


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
            <DashBoardComponent />
            <CardContainer/>
            <main>
                <Outlet />
            </main>
        </>
        
        
    )
}