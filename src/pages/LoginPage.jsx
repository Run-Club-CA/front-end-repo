import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage(){

    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user]);



    return(
        <main>
            
            {/* {Place Logo/Title component here} */}

            <article>
                <p>
                    A Social running club in Waverly,
                    Come join us and enjoy running
                    at all skill levels!
                </p>

                <LoginForm />

                <p>Don't have an account? <a href="./signup"><strong>Sign Up Here</strong></a> </p>
            </article>
        </main>
    );
    
}