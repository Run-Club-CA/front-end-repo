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

// Gets all upcoming events from the database
// Sends a basic fetch get request through the backend url
// Returns list of upcoming events for the user
export async function getEvents(){
    const response = await fetch(`${api}/events/users`, {
        method: "GET",
        headers:{
            'Content-type':"application/json"
        },
    }).catch(error => console.log(error));

    const json = await response.json();
    console.log(json);
    return json;
}

// Gets all events user is attending from the database
// Sends username as parameter
// Returns a list of bookings related to that specific user
export async function getUserEvents(userJWT){
    const response = await fetch(`${api}/events/userbookings/`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${userJWT}`,
            'Content-type': "application/json"
        }
    }).catch(error => console.log(error));

    const json = await response.json();
    console.log(json);
    return json
}

// Function to allow user to register attendance to an event
// Function uses userJWT and the eventID in the request to the server
// Returns a successful registration or unsuccessful registration
export async function registerAttendance(userJWT, eventID){
    const response = await fetch(`${api}/events/bookuser`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${userJWT}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify(eventID)
    }).catch(error => console.log(error))

    const json = await response.json();
    console.log(json);

    return json
}

// Function to remove users attendance
// Sends userJWT and eventID to server
// Returns successful booking or unsuccessful booking
export async function removeAttendance(userJWT, eventID){
    const response = await fetch(`${api}/events/removebooking`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${userJWT}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify(eventID)
    }).catch(error => console.log(error))

    const json = await response.json();
    console.log(json);
    return json
}