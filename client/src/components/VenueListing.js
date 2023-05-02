import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews";
import { Card, Icon } from "semantic-ui-react";


function VenueListing({user}){
    const [venueListing, setVenueListing] = useState([])
    const params = useParams()
    console.log(user)
    
    useEffect(() => {
        fetch(`/venues/${params.id}`)
            .then((r) => r.json())
            .then(setVenueListing);
      }, [params.id]);


    return( 
        
        <Card fluid>
            <h2>
                {venueListing.name} 
                <h3>
                    {venueListing.city}, {venueListing.state}<br />
                    {/* <Icon name='user' /> {venueListing.user.username} */}
                </h3>
            </h2>
            <img src={venueListing.image_url} alt="venue"/>
            <h3>Description:</h3>
            <p>{venueListing.description}</p>
            <Card.Content>
                <h3>Reviews:</h3>
                <Reviews user={user}/>
            </Card.Content>
            

        </Card>
    );
}

export default VenueListing;