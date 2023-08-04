import { useState } from "react";
import { loginUser } from "../services/UserServices";
import { useAuth } from "../contexts/AuthContext";



export function LoginForm(){

    const {login} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        
        let loginData = {
            email: email,
            password: password
        }

        loginUser(loginData)
        .then(data => login(data))
        .catch(error => console.log(error));
    }


    return(
        <div>
            <form onSubmit={handleChange} className="flex flex-col justify-between text-white items-center p-2 gap-y-2">
                <label>Email: </label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-mobile-width p-1 rounded-mobile-form shadow-form-mobile text-black text-center" />

                <label>Password: </label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-mobile-width p-1 rounded-mobile-form shadow-form-mobile text-black text-center" />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}