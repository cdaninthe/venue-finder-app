import React from "react";
import { Card, Icon } from "semantic-ui-react";
import {useHistory} from 'react-router-dom';

function UserVenues({userVenues, handleDeleteVenue}){
    const history = useHistory()
  
    return(
        <div>
            <br />
            <Card.Group itemsPerRow={4}>
                {userVenues.map((venue) => (
                    <Card key={venue.id} >
                        <h4 onClick={() => history.push(`/venues/${venue.id}`)}>
                            {/* <a href={`/venues/${venue.id}`}> */}
                                {venue.name}
                                {/* </a> */}
                                </h4>
                        <div>
                            {/* <Icon name='edit outline' onClick={()=>console.log('edit listing', venue.id)}/> */}
                            {/* <Icon name='trash alternate outline' onClick={()=>handleDeleteVenue(venue.id)}/> */}
                        </div>
                    </Card>
                ))}
            </Card.Group>           
        </div>
    )
}

export default UserVenues;