import { useEffect, useState } from "react";
import EventCard from "./EventsCard";
import { getEvents, getUserEvents } from "../services/EventServices";
import { useAuth } from "../contexts/AuthContext";

export default function CardContainer(){

    const [eventsList, setEventsList] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        getEvents()
        .then(data => setEventsList(data))
        .catch(error => console.log(error))
    },[])

    const handleUpcomingEvents = () => {
        getEvents()
        .then(data => setEventsList(data))
        .catch(error => console.log(error))
    }

    const handleAttendingEvents = (userJWT) => {
        getUserEvents(userJWT)
        .then(data => setEventsList(data))
        .catch(error => console.log(error))
    }

    return(
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between text-white items-center bg-grey-div mx-auto rounded-main-div shadow-mobile-shadow w-5/6 lg:w-3/5 p-2 gap-y-2">
            <div className="lg:flex lg:flex-row lg:justify-center lg:mx-auto lg:w-full lg:p-3 gap-x-7">
                <button onClick={() => {handleUpcomingEvents()}} className="mx-2 my-2 bg-violet-500 hover:bg-violet-700 text-white text-center font-bold py-1 px-2 rounded">Upcoming Events</button>
                <button onClick={() => {handleAttendingEvents(user)}} className="mx-2 my-2 bg-violet-500 hover:bg-violet-700 text-white text-center font-bold py-1 px-2 rounded">Attending Events</button>
            </div>
            
            {eventsList.map(event => <EventCard 
                key={event.id}
                name={event.name} 
                location={event.location}
                date={event.date}
                time={event.time}
                distance={event.distance}
                difficulty={event.difficulty}
                trainer={event.trainer}
                id={event._id}/>)}  
        </div>
    )
}