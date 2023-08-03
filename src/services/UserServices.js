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

// Function to get user details from the database
// Sends an api request with jwt in the authorization header
export async function getUser(userJWT){
    const response = await fetch(`${api}/users/user`, {
        method: "GET",
        headers:{
            "Authorization": userJWT
        }
    }).catch(error => console.log(error))

    const json = await response.json();
    console.log(json);
    return json;
}

// Function to allow user to update user details from front-end component
// to back-end route
// Sends API request with authorization header and updated user details
export async function updateUser(data, userJWT){
    console.log(userJWT);
    const response = await fetch(`${api}/users/edit-user`, {
        method: "PUT",
        headers:{
            "Authorization": userJWT,
            "Content-type": "application/json"
        },
        body: JSON.stringify(data) 
    }).catch(error => console.log(error));

    const json = await response.json();
    console.log(json);
    return json
}