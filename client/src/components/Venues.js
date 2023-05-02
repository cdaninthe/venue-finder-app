import React, {useEffect, useState} from "react";
import { Card } from "semantic-ui-react";
import Venue from "./Venue";

function Venues({user}){
    const [venues, setVenues] = useState([])

    useEffect(()=>{
        fetch(`/venues`)
        .then((r)=> r.json())
        .then((venues)=> {
            setVenues(venues)
        })
    },[])
    

    return(
        <Card.Group itemsPerRow={4}>
            {venues.map((venue) => (
                <Venue
                    key={venue.id} venue={venue} user={user}
                />
            ))}
        </Card.Group>
    );
}

export default Venues;