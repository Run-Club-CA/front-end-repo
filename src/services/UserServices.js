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
    console.log(json)
    return json
}

// Function to get user details from the database
// Sends an api request with jwt in the authorization header
export async function getUser(userJWT){
    const response = await fetch(`${api}/users/user`, {
        method: "GET",
        headers:{
            "Authorization": `Bearer ${userJWT}`
        }
    }).catch(error => console.log(error))

    const json = await response.json();
    console.log(json);
    return json;
}

// Get all trainers, returns response container trainers usernames
export async function getTrainers(userJWT){
    const response = await fetch(`${api}/users/allTrainers`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${userJWT}`
        }
    }).catch(error => console.log(error))

    const json = await response.json();
    console.log(json);
    return json
}


// Function to allow user to update user details from front-end component
// to back-end route
// Sends API request with authorization header and updated user details
export async function updateUser(data, userJWT){
    console.log(userJWT);
    const response = await fetch(`${api}/users/edit-user`, {
        method: "PUT",
        headers:{
            "Authorization": `Bearer ${userJWT}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify(data) 
    }).catch(error => console.log(error));

    const json = await response.json();
    console.log(json);
    return json
}

// Function to remove user from database
// Sends API request with auth header and delete request
export async function removeUserFromDatabase(userJWT){
    const response = await fetch(`${api}/users/delete-account`, {
        method: "DELETE",
        headers:{
            "Authorization": `Bearer ${userJWT}`
        }
    }).catch(error => console.log(error));

    const json = await response.json();
    console.log(json)
    return json
}

// Admin function to fetch list of users on the database, 
// Function sends request header of authorization to confirm user is admin
// Returns array of user objects/documents from database
export async function getAllUsers(userJWT){
    const response = await fetch(`${api}/users/all`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${userJWT}`
        }
    }).catch(error => console.log(error));

    const json = await response.json();
    console.log(json);
    return json
}

// Admin function to send request to update users status on database
// Request sends paramater of userName they wish to update
// Request also sends Admin JWT as authorization to confirm admin is making request
// Returns updated AdminJWT and confirmation of user status change
export async function updateUserStatus(userName, userJWT){
    const response = await fetch(`${api}/users/admin/edit-status/${userName}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${userJWT}`
        }
    }).catch(error => console.log(error));

    const json = await response.json();
    console.log(json);
    return json
}

// Admin function to remove user from database
// Request sends parameter of username within fetch route request
// Request sends Admin JWT for authorization
// Returns admin JWT and confirmation of user removal
export async function removeUser(userName, userJWT){
    const response = await fetch(`${api}/users/admin/remove-account/${userName}`, {
        method: "DELETE",
        headers: {
            "Authorization" : `Bearer ${userJWT}`
        }
    }).catch(error => console.log(error));

    const json = await response.json();
    console.log(json);
    return json
}