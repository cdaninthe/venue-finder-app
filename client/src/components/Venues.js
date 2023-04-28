import React, {useEffect, useState} from "react";
import { Card } from "semantic-ui-react";
import Venue from "./Venue";

function Venues(){
    const [venues, setVenues] = useState([])

    useEffect(()=>{
        fetch(`/venues`)
        .then((r)=> r.json())
        .then((venues)=> {
            console.log(venues)
            setVenues(venues)
        })
    },[])
    

    return(
        <Card.Group itemsPerRow={4}>
            {venues.map((venue) => (
                <Venue
                    key={venue.id} venue={venue}
                />
            ))}
        </Card.Group>
    );
}

export default Venues;