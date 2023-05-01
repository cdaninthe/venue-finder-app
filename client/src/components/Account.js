import React, {useEffect, useState} from "react";


function Account({user}){
    const [reviews, setReviews] = useState([]);
    const [venues, setVenues] = useState([]);

    console.log(user)

    useEffect(() => {
    fetch("/me").then((r) => {
        if (r.ok) {
            r.json().then((user) => {
                console.log(user)
                // setSpaces(user.spaces)
                // setReviews(user.reviews)
            });
        }
    });
    }, []);

    // const addNewSpace = (formData) => {
    //     setSpaces((spaces) => [formData, ...spaces])
    // }
    

    return(
        <div>
            {/* <VenueForm /> */}
            <div>
                USER ACCOUNT
                {/* <UserReviews /> */}
                {/* <UserVenues venues={venues}/> */}
            </div>
        </div>
    )
}

export default Account;