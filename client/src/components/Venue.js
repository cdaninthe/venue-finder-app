import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import {useHistory} from 'react-router-dom';

function Venue({venue, user}){
    const history = useHistory()
    console.log(user)

    return( 
        <Card fluid color='green' onClick={() => history.push(`/venues/${venue.id}`)}>
        {/* <Card fluid color='green' onClick={() => console.log(`go to this page url /venues/${venue.id}`)}> */}
            {/* <Image src='https://media.istockphoto.com/id/1193046540/vector/photo-coming-soon-image-icon-vector-illustration-isolated-on-white-background-no-website.jpg?s=612x612&w=0&k=20&c=4wx1UzigP0g9vJv9D_DmOxdAT_DtX5peZdoS4hi2Fqg=' wrapped ui={false} /> */}
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
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    venue.review.count Reviews OR Rating
                </a>
            </Card.Content>
        </Card>   
    );
}

export default Venue;