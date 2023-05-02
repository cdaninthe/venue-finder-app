import React from "react";
import { Card } from "semantic-ui-react";

function UserReviews({userReviews}){


    return(
        <div>
            <Card.Group itemsPerRow={4}>
                {userReviews.map((review) => (
                    <Card key={review.id}>
                        <a href={`/venues/${review.venue_id}`}><h4>{review.venue.name}</h4></a>
                        <span>Rating: {review.rating}/5</span>
                        <p>{review.comment.substr(0,20)}...</p>
                    </Card>
                ))}
            </Card.Group>
        </div>
    )
}

export default UserReviews;