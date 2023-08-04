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