import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage(){

    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user !== null) {
            navigate("/dashboard");
        }
    }, [user]);

    return(
        <main className="flex justify-center flex-col">

            <article className="text-white bg-grey-div mx-auto  my-10 w-mobile-width h-mobile-height p-4 rounded-main-div shadow-mobile-shadow">
                <h1 className="font-bold text-lg text-center font-mono mb-2">The Run Club</h1>
                <p className="text-center">
                    A Social running club in Waverly,
                    Come join us and enjoy running
                    at all skill levels!
                </p>
            </article>

            <LoginForm />

            <div className="text-white mx-auto my-10">
                <p>Don't have an account? <a href="./signup"><strong>Sign Up Here</strong></a> </p>
            </div>
                
            
        </main>
    );
    
}