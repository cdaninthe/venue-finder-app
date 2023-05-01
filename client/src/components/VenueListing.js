import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews";


function VenueListing(user){
    const [venueListing, setVenueListing] = useState([])
    const params = useParams()
    
    useEffect(() => {
        fetch(`/venues/${params.id}`)
            .then((r) => r.json())
            .then(setVenueListing);
      }, [params.id]);


    return( 
        
        <div>
            <h2>{venueListing.name}</h2>
            <img src={venueListing.image_url} alt="venue"/>
            <p>Description: {venueListing.description}</p>
            <h3>Reviews:</h3>
            <Reviews user={user}/>

        </div>
    );
}

export default VenueListing;