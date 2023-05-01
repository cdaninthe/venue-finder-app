import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import {useHistory} from 'react-router-dom';

function Review({review, user}){
    const history = useHistory()

    return( 
        <Card fluid color='green'>
            <Card.Content>
                <Card.Content>
                    <Icon name='user' />
                    User ID: {review.user_id} username: {review.user.username}
                </Card.Content>
                <Card.Meta>
                    <span className='date'>RATING: {review.rating}/5</span>
                </Card.Meta>
                <Card.Description>
                    {review.comment}
                </Card.Description>
            </Card.Content>
        </Card>   
    );
}

export default Review;