import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-use";
import { useEffect} from "react";
import DashBoardComponent from "../components/DashboardComponent";
import CardContainer from "../components/EventsCardContainer";


export default function Dashboard(){
    
    const {user} = useAuth();
    const navigate = useNavigate(); 
    let location = useLocation()

    useEffect(() => {
        if (user === null) {
            navigate("/");
        }
    }, [user]);


    if(location.pathname === "/dashboard/" || location.pathname === "/dashboard"){
        return(
            <>
                <DashBoardComponent />
                <CardContainer />
                <main>
                    <Outlet />
                </main>
            </>
            
            
        )
    } else {
        return(
            <>
                <DashBoardComponent />
                <main>
                    <Outlet />
                </main>
            </>
            
            
        )
    }
}