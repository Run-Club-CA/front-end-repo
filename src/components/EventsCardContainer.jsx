import { useEffect, useState } from "react";
import EventCard from "./EventsCard";
import { getEvents } from "../services/EventServices";
export default function CardContainer(){

    const [eventsList, setEventsList] = useState([]);

    useEffect(() => {
        getEvents()
        .then(data => setEventsList(data))
        .catch(error => console.log(error))
    },[])

    return(
        <div>
          {eventsList.map(event => <EventCard 
            name={event.name} 
            location={event.location}
            date={event.date}
            time={event.time}
            distance={event.distance}
            difficulty={event.difficulty}
            trainer={event.trainer}/>)}  
        </div>
    )
}