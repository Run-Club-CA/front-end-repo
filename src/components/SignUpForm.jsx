
export default function SignUpForm(){

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return(
        <div>
            <form name="sign up form">
                <label>First Name</label>
                <input type="text" />

                <label>Last Name</label>
                <input type="text" />

                <label>Email</label>
                <input type="email" />

                <label>UserName</label>
                <input type="text" />

                <label>Password</label>
                <input type="password" />

                <button type="submit">Create Account</button> 
            </form>
        </div>
        
    )
}