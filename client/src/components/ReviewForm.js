import React, {useEffect, useState} from "react";


function ReviewForm({venueId, updateReviews, user}){
    
    const [ userReviewRating, setUserReviewRating ] = useState("")
    const [ userReviewComment, setUserReviewComment ] = useState("")
    const [ showForm, setShowForm ] = useState(true)
    const [ errors, setErrors ] = useState([])

    useEffect(() => {
        setShowForm(false)
    }, []);

    function handleFormSubmit(e){
        e.preventDefault()
        fetch(`/reviews`, {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                rating: userReviewRating,
                comment: userReviewComment,
                venue_id: parseInt(venueId),
                user_id: user.id
            })
        }).then(res => {
            if (!res.ok){
                res.json().then((err) =>{
                setErrors(err.errors)})
            } else{
                setShowForm(false)
                res.json().then((data) => updateReviews(data))
            }
        })
    }

    if(!showForm) return(
        <button onClick={() => setShowForm(true)}>Write a review</button>
    )

    return(
        <div>
            <div>
                <form onSubmit={(e) => handleFormSubmit(e)}>
                    <label>Rating: </label><br />
                    <input type="number" placeholder="1-5 rating" 
                        value={userReviewRating}
                        onChange={(e) => setUserReviewRating(e.target.value)}
                    />
                    <label>Comment: </label><br />
                    <input type="text" placeholder="Comment" 
                        value={userReviewComment}
                        onChange={(e) => setUserReviewComment(e.target.value)}
                    />
                    <button type="submit">Submit</button>

                    <button onClick={() => setShowForm(false)}>Cancel</button>
                </form>
            </div>
            { errors && 
                <div id="errors-container">
                    { errors.map(error => <span className="error-message" key={error}>{error}</span>)}
                </div>
            }
        </div>
    )
}

export default ReviewForm;