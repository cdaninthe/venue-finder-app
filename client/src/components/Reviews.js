import React, {useEffect, useState, useContext} from "react";
import { Card } from "semantic-ui-react";
import Review from "./Review";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import UserContext from "./UserContext";


// function Reviews({user}){

    // NC
function Reviews({venueListing, setVenueListing}){
    // const { user } = useContext(UserContext)
    const { user, setUser } = useContext(UserContext)
    // NC end
    console.log(venueListing)
    console.log(venueListing.users)
    console.log(user)
    console.log([user.id, user.username])

    
    

    const params = useParams()
    const [reviews, setReviews] = useState([])    

    useEffect(() => {
        fetch(`/venues/${params.id}/reviews`)
            .then((r) => r.json())
            .then(setReviews);
    }, [params.id]);

    function handleAddReview(newReview){
        setReviews([newReview, ...reviews])
        console.log(venueListing.users)
        const listingUsers = [...venueListing.users, {id: user.id, username: user.username}]
        console.log(listingUsers)
        console.log({...venueListing, users: listingUsers})
        setVenueListing({...venueListing, users: listingUsers})
        
        const venue = {city: venueListing.city, 
            id: venueListing.id,
            image_url: venueListing.image_url,
            name: venueListing.name,
            price: venueListing.price,
            state: venueListing.state
        }
        const listingVenues = [...user.venues, venue]
        const listingReviews = [...user.reviews, newReview]
        setUser({...user, venues: listingVenues, reviews: listingReviews})
        
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