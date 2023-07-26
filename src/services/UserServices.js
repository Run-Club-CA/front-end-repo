// Use localhost or backend URL for api depending on whats available
let api = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

// CreateUser function, allows user signupForm to interact with
// backend api/users/signup POST method 
// Returns Token (Needs further work to save authenticated token in client side)
export async function createUser(data){
    const response = await fetch(`${api}/users/signup`, {
        method: "POST",
        headers:{
            'Content-type':"application/json"
        },
        body: JSON.stringify(data)
    })

    const json = await response.json();
    console.log(json);
    return json
}