import { useState } from "react";
import { createUser } from "../services/UserServices";
import { useAuth } from "../contexts/AuthContext";




export default function SignUpForm(){

    const {login} =useAuth();

    // Save the state of each input in signUpForm
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    // On submit, save the states of each variable into User Object
    // Send user data to back-end server to be saved into database
    // If an error occurs catch it and console.log for time being
    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: userName,
            password: password
        }

        // CreateUser function from UserServices.js
        createUser(user)
        .then(data => login(data.token))
        .catch(error => {console.log(error)});

    }


    return(
        <div>
            <form name="sign up form" onSubmit={handleSubmit} className="flex flex-col justify-between text-white items-center p-2 gap-y-2">
                <label>First Name</label>
                <input type="text" name="fname" value={firstName} onChange={e => setFirstName(e.target.value)} className="w-mobile-width p-1 rounded-mobile-form shadow-form-mobile text-black text-center"/>

                <label>Last Name</label>
                <input type="text" name="lname" value={lastName} onChange={e => setLastName(e.target.value)} className="w-mobile-width p-1 rounded-mobile-form shadow-form-mobile text-black text-center" />

                <label>Email</label>
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className="w-mobile-width p-1 rounded-mobile-form shadow-form-mobile text-black text-center"/>

                <label>UserName</label>
                <input type="text" name="username" value={userName} onChange={e => setUserName(e.target.value)} className="w-mobile-width p-1 rounded-mobile-form shadow-form-mobile text-black text-center"/>

                <label>Password</label>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} className="w-mobile-width p-1 rounded-mobile-form shadow-form-mobile text-black text-center"/>

                <button type="submit">Create Account</button> 
            </form>
        </div>
        
    )
}