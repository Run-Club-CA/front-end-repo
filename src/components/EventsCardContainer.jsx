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
        <div className="flex flex-col justify-between text-white items-center bg-grey-div mx-auto rounded-main-div shadow-mobile-shadow w-5/6 p-2 gap-y-2">
            <button onClick={() => {handleUpcomingEvents()}}>Upcoming Events</button>
            <button onClick={() => {handleAttendingEvents(user)}}>Attending Events</button>
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