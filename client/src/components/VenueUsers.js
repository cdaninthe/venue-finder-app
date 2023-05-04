import React from "react";

function VenueUsers({venueUsers}){
    console.log(venueUsers)


    return(
        <div>
            {venueUsers.map((user) => (
                <div key={user.id} onClick={() => console.log(user.id, 'was clicked')}>{user.username}</div>
            ))}
        </div>
    )
}

export default VenueUsers;