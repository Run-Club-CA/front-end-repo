import { useState } from "react";
import { useLocalStorage } from "react-use";



export default function SignUpForm(){

    const [savedUser, setSavedUser] = useLocalStorage("user", null)

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            userName: userName,
            password: password
        }

        setSavedUser(user);
        console.log(savedUser);

    }


    return(
        <div>
            <form name="sign up form" onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" name="fname" value={firstName} onChange={e => setFirstName(e.target.value)}/>

                <label>Last Name</label>
                <input type="text" name="lname" value={lastName} onChange={e => setLastName(e.target.value)} />

                <label>Email</label>
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>

                <label>UserName</label>
                <input type="text" name="username" value={userName} onChange={e => setUserName(e.target.value)}/>

                <label>Password</label>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button type="submit">Create Account</button> 
            </form>
        </div>
        
    )
}