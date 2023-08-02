// Use localhost or backend URL for api depending on whats available
let api = ""
switch (process.env.NODE_ENV) {
    case "development":
        api = "http://localhost:5000"
        break;
    case "production":
        api = process.env.REACT_APP_BACKEND_URL;
        break;
    default:
        break;
}


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


// Login Function, takes user input from loginForm
// Interacts with back-end server by sending data through request, body
// Receives authentication Token upon success, error message upon failure
export async function loginUser(data){
    const response = await fetch(`${api}/users/login`, {
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