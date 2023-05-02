import React, {useEffect, useState} from "react";
import UserVenues from "./UserVenues";
import VenueForm from "./VenueForm";
import UserReviews from "./UserReviews";

function Account({user}){
    const [userReviews, setUserReviews] = useState([]);
    const [userVenues, setUserVenues] = useState([]);
    const [venueFormHidden, setVenueFormHidden] = useState('hidden')

    console.log(user)

    useEffect(() => {
    fetch("/me").then((r) => {
        if (r.ok) {
            r.json().then((user) => {
                console.log(user.venues)
                console.log(user.reviews)
                setUserVenues(user.venues)
                setUserReviews(user.reviews)
            });
        }
    });
    }, []);

    function addNewVenue(formData){
        setUserVenues((venues) => [formData, ...venues])
    }

    function handleDeleteVenue(venueId){
        fetch(`/venues/${venueId}`, {
            method: "DELETE",
        }).then(res => {
            if(res.ok){
                setUserVenues(
                    userVenues.filter((venue) => {
                        return venue.id !== venueId
                    })
                )
            }
        })
    }
    
    function handleAddClick(){
        console.log('show form')
        setVenueFormHidden('')
    }

    return(
        <div>
            <h2>ACCOUNT OVERVIEW</h2>
            <br />
            
            <div>
                <h4>My Venues</h4>
                <button onClick={handleAddClick}>+ Add New Venue</button>
                <div hidden={venueFormHidden}>
                    <VenueForm addNewVenue={addNewVenue} setVenueFormHidden={setVenueFormHidden}/>
                </div>
                <UserVenues 
                    userVenues={userVenues}
                    handleDeleteVenue={handleDeleteVenue}
                />
            </div>
            <div>
                <br />
                <h4>My Reviews</h4>
                <UserReviews userReviews={userReviews}/>
            </div>
        </div>
    )
}

export default Account;