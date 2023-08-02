import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import UserForm from "../components/UserForm";

export default function SignUpPage(){

    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user !== null) {
            navigate("/dashboard");
        }
    }, [user]);



    return(
        <main>
            <div>
                {/* {Place logo/title card here} */}
            </div>
            

            <article>

                <h1> Sign Up </h1>

                <UserForm />

            </article>
            


        </main>
    );
    
}