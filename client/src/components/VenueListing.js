import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews";
import { Card } from "semantic-ui-react";
import VenueUsers from "./VenueUsers";



function VenueListing({venues}){
    console.log(venues)
    // console.log(venues[0].users)
    // console.log(venues[0].reviews)

  

    const [venueListing, setVenueListing] = useState([])
    const [showReviews, setShowReviews] = useState(false)
    const [showReviewsBtn, setShowReviewsBtn] = useState("SHOW REVIEWS")
    const [showUsers, setShowUsers] = useState(false)
    const [showUsersBtn, setShowUsersBtn] = useState("SHOW VENUE USERS")
    const params = useParams()

    useEffect(() => {
        // fetch(`/venues/${params.id}`)
        //     .then((r) => r.json())
        //     .then(setVenueListing);
    
        const venue = venues.filter((venue)=>(
            venue.id == params.id
        ))
        console.log(venues)
        console.log(venue)
        console.log(venue[0])
        setVenueListing(venue[0])
      }, [params.id]);

      function handleShowReviews(){
        setShowReviews(!showReviews)
        showReviewsBtn === "SHOW REVIEWS" ? setShowReviewsBtn("HIDE REVIEWS") : setShowReviewsBtn("SHOW REVIEWS")
      }

      function handleShowUsers(){
        setShowUsers(!showUsers)
        showUsersBtn === "SHOW VENUE USERS" ? setShowUsersBtn("HIDE USERS") : setShowUsersBtn("SHOW VENUE USERS")
      }


    return( 
        
        <Card fluid>
            <h2>
                {venueListing.name} 
                <h3>
                    {venueListing.city}, {venueListing.state}<br />
                </h3>
            </h2>
            <img src={venueListing.image_url} alt="venue"/>
            <h4>Price: ${venueListing.price}/h </h4>
            <h3>Description:</h3>
            <p>{venueListing.description}</p>
                      
            <div> 
                <Card fluid>
                    <button onClick={handleShowUsers}>{showUsersBtn}</button>
                    { showUsers ?
                        <Card.Content>
                            <h3>User List:</h3>
                            <VenueUsers venueUsers={venueListing.users}/>
                        </Card.Content>
                    :null}
                </Card>
                
                <Card fluid>
                    <button onClick={handleShowReviews}>{showReviewsBtn}</button>
                    { showReviews ? 
                        <Card.Content>
                            <br />
                            <h3>Reviews:</h3>
                            <Reviews venueListing={venueListing} setVenueListing={setVenueListing}/>
                        </Card.Content>
                    : null}
                </Card>
                
            </div>
            <br />    
        </Card>
    );
}

export default VenueListing;