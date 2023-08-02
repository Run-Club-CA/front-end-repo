import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DashBoardComponent from "../components/DashboardComponent";

// import { getUser } from "../services/UserServices";

export default function Dashboard(){
    
    const {user} = useAuth();
    const navigate = useNavigate(); 

    // const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        if (user === null) {
            navigate("/");
        }
    }, [user]);

    // useEffect(() => {
    //     setUserDetails(getUser(user.user));
    //     console.log(userDetails);
    // }, [])
    


    return(
        <>
            <DashBoardComponent />
            <main>
                <Outlet />
            </main>
        </>
        
        
    )
}