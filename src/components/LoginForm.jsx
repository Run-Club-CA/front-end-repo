import { useState } from "react";


export function LoginForm(){


    return(
        <div>
            <form onSubmit={handleChange}>
                <label>Email: </label>
                <input type="email" name="email" />

                <label>Password: </label>
                <input type="password" name="password" />
            </form>
        </div>
    )
}