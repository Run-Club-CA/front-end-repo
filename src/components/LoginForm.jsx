import { useState } from "react";
import { loginUser } from "../services/UserServices";


export function LoginForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        
        let loginData = {
            email: email,
            password: password
        }

        loginUser(loginData).then(data => console.log(data)).catch(error => console.log(error));
    }


    return(
        <div>
            <form onSubmit={handleChange}>
                <label>Email: </label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Password: </label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}