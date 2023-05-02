import React from "react";
import { Card, Image } from "semantic-ui-react";
import {useHistory} from 'react-router-dom';

function Venue({venue}){
    const history = useHistory()

    return( 
        <Card fluid color='green' onClick={() => history.push(`/venues/${venue.id}`)}>
            <Image src={venue.image_url} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{venue.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{venue.city}, {venue.state}</span>
                </Card.Meta>
                <Card.Description>
                    ${venue.price} / hour
                </Card.Description>
            </Card.Content>
        </Card>   
    );
}

export default Venue;