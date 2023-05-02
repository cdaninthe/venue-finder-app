import React, {useState} from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import {useHistory} from 'react-router-dom';

function Review({review, onDeleteReview, onUpdateReview, user}){
    const [commentHidden, setCommentHidden] = useState('')
    const [formHidden, setFormHidden] = useState('hidden')
    const [reviewRating, setReviewRating] = useState('')
    const [reviewComment, setReviewComment] = useState('')
    const [ editable, setEditable ] = useState(false)
    const history = useHistory()
    console.log(user, user.id)

    function handleEditClick(){
        console.log('edit this review', review.id)
        setCommentHidden('hidden')
        setFormHidden('')
        console.log(review.rating)
        console.log(review.comment)
        setReviewRating(review.rating)
        setReviewComment(review.comment)
    }

    function handleSubmitUpdate(e){
        e.preventDefault()
        onUpdateReview(review.id, reviewRating, reviewComment)
        setCommentHidden('')
        setFormHidden('hidden')
    }


    return( 
        <Card fluid color='green'>
            <Card.Content hidden={commentHidden}>
                <Card.Content>
                    <Icon name='user' />
                    {review.user.username} === DELETE THIS: User ID: {review.user.id}
                </Card.Content>
                <Card.Meta>
                    RATING: {review.rating}/5
                </Card.Meta>
                <Card.Description>
                    {review.comment}
                </Card.Description>
                
            </Card.Content>
            <div>
                {/* {user.id === review.user.id ? */}
                {user.id === review.user.id ?
                    <div>
                        
                        <Icon name='edit outline' onClick={handleEditClick}/>
                        <Icon name='trash alternate outline' onClick={() => onDeleteReview(review.id)}/>
                        
                        <form hidden={formHidden} onSubmit={handleSubmitUpdate}>
                            <label>Rating: </label>
                            <input type="number" placeholder="1-5 rating" 
                                value={reviewRating}
                                onChange={(e) => setReviewRating(e.target.value)}
                            /><br />
                            <label>Comment: </label>
                            <input type="text" placeholder="Comment" 
                                value={reviewComment}
                                onChange={(e) => setReviewComment(e.target.value)}
                            /><br />
                            <button type="submit">Update</button>
                        </form>
                    </div>
                    : null
                }
            </div>
        </Card>   
    );
}

export default Review;