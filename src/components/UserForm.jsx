import { useEffect, useState } from "react";
import { createUser, updateUser } from "../services/UserServices";
import { useAuth } from "../contexts/AuthContext";
import { useLocation } from "react-use";
import { useUser } from "../contexts/UserContext";




export default function UserForm(){

    const {user, login} = useAuth();
    let location = useLocation();
    const {userDetails, storeUserDetails} = useUser();

    // Save the state of each input in signUpForm
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [buttonName, setButtonName] = useState("");

    useEffect(() => {
        if (location.pathname === "/signup"){
            setButtonName("Create Account")
        } else {
            setButtonName("Edit Profile");
        }
    }, [buttonName]);


    // On submit, save the states of each variable into User Object
    // Send user data to back-end server to be saved into database
    // If an error occurs catch it and console.log for time being
    const handleSubmit = async (event) => {
        event.preventDefault();
        let userData = {
            firstName: firstName || userDetails.firstName,
            lastName: lastName || userDetails.lastName,
            email: email || userDetails.email,
            username: userName || userDetails.username,
            password: password || null
        }

        // conditional check of location.path
        // If location is signup, use createUser function to sign up user
        // If location is profile, use updateUser function to sign up user
        if(location.pathname === "/signup"){
            createUser(userData)
            .then(data => login(data))
            .catch(error => {console.log(error)});
            storeUserDetails(userData);
        } else {
            updateUser(userData, user)
            .then(data => login(data))
            .catch(error => console.log(error));
            storeUserDetails(userData);
        }
    }


    return(
        <div>
            <form name="user form" onSubmit={handleSubmit} className="flex flex-col justify-between text-white items-center p-2 gap-y-2">
                <label>First Name</label>
                <input type="text" name="fname" value={firstName} onChange={e => setFirstName(e.target.value)} className="w-mobile-width p-1 rounded-mobile-form shadow-form-mobile text-black text-center"/>

                <label>Last Name</label>
                <input type="text" name="lname" value={lastName} onChange={e => setLastName(e.target.value)} className="w-mobile-width p-1 rounded-mobile-form shadow-form-mobile text-black text-center" />

                <label>Email</label>
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className="w-mobile-width p-1 rounded-mobile-form shadow-form-mobile text-black text-center"/>

                <label>UserName</label>
                <input type="text" name="username" value={userName} onChange={e => setUserName(e.target.value) || userDetails.username} className="w-mobile-width p-1 rounded-mobile-form shadow-form-mobile text-black text-center"/>

                <label>Password</label>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} className="w-mobile-width p-1 rounded-mobile-form shadow-form-mobile text-black text-center"/>

                <button type="submit">{buttonName}</button> 
            </form>
        </div>
        
    )
}