import React, {useEffect, useState} from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import {useHistory} from 'react-router-dom';
import { useParams } from "react-router-dom";


function VenuePage({venue}){
    const history = useHistory()
    const [venueDetails, setVenueDetails] = useState([])
    const params = useParams()
    
    useEffect(() => {
        fetch(`/venues/${params.id}`)
            .then((r) => r.json())
            .then(setVenueDetails);
      }, [params.id]);


    // useEffect(() => {
    //     fetch(`/spaces/${venue.id}`)
    //     .then((r) => r.json())
    //     .then(setVenueDetails);
    // }, [venue.id]);

    return( 
        
        <div>
            <h2>{venueDetails.name} this is a listing</h2>
            <img src={venueDetails.image_url} alt="venue"/>
              

        </div>
    );
}

export default VenuePage;