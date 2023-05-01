import React, {useEffect, useState} from "react";
import { Card } from "semantic-ui-react";
import Review from "./Review";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";

function Reviews({user}){
    const params = useParams()
    const [reviews, setReviews] = useState([])
    

    useEffect(() => {
        fetch(`/venues/${params.id}/reviews`)
            .then((r) => r.json())
            .then(setReviews);
      }, [params.id]);

    return(
        <div>
            <Card.Group itemsPerRow={1}>
                {/* <h5 className="reviews-header"> Here's what others are saying... </h5> */}
                <ReviewForm 
                    spaceId={params.id}
                    // updateReviews={updateReviews}
                    user={user}
                />

                {reviews.map((review) => (
                    <Review
                        key={review.id} review={review} user={user}
                    />
                ))}
            </Card.Group>
        </div>
       
    );
}

export default Reviews;