import React, {useEffect, useState} from "react";
import { Card } from "semantic-ui-react";
import Review from "./Review";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";

function Reviews({user}){
    const params = useParams()
    const [reviews, setReviews] = useState([])
    console.log(user)
    

    useEffect(() => {
        fetch(`/venues/${params.id}/reviews`)
            .then((r) => r.json())
            .then(setReviews);
    }, [params.id]);

    function handleAddReview(newReview){
        setReviews([newReview, ...reviews])
    }

    function handleDeleteReview(reviewId){
        fetch(`/reviews/${reviewId}`, {
            method: "DELETE",
        }).then(res => {
            if(res.ok){
                setReviews(
                    reviews.filter((review) => {
                        return review.id !== reviewId
                    })
                )
            }
        })
    }


    function handleUpdateReview (reviewId, rating, comment){
        fetch(`/reviews/${reviewId}`, {
            method: "PATCH",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                rating: rating,
                comment: comment,
            })
        }).then(res => {
            if(!res.ok){
                res.json().then((err) =>{
                    alert(err.errors)
                    return reviews;
                })
            }else{
                setReviews((reviews) => {
                    const updatedReviews = reviews.map(review => {
                        if(review.id === reviewId){
                           review.comment = comment;
                           review.rating = rating
                        }
                        return review;
                    })
                    return updatedReviews;
                })
            }
        })
    }


    return(
        <div>
            <Card.Group itemsPerRow={1}>
                {/* <h5 className="reviews-header"> Here's what others are saying... </h5> */}
                <ReviewForm 
                    venueId={params.id}
                    onAddReview={handleAddReview}
                    user={user}
                />

                {reviews.map((review) => (
                    <Review
                        key={review.id} review={review} user={user}
                        onDeleteReview={handleDeleteReview}
                        onUpdateReview={handleUpdateReview}
                    />
                ))}
            </Card.Group>
        </div>
       
    );
}

export default Reviews;