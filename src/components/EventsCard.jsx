

export default function EventCard(props){
    
    let {name, location, date, time, distance, difficulty, trainer} = props

    return(
        <div>
            <h1>{name}</h1>
            <p>{date}</p>
            <p>{time}</p>
            <p>{location}</p>
            <p>{distance}</p>
            <p>{difficulty}</p>
            <p>{trainer}</p>
        </div>
    )
}