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
            <div className="flex justify-between items-center text-white bg-grey-div mx-auto my-10 w-mobile-width h-mobile-height p-4 rounded-main-div shadow-mobile-shadow">
                <h1 className="text-3xl mx-auto font-mono">The Run Club</h1>
            </div>
            

            <article>

                <h1> Sign Up </h1>

                <UserForm />

            </article>
            


        </main>
    );
    
}