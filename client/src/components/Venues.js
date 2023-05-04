import React from "react";
import { Card } from "semantic-ui-react";
import Venue from "./Venue";
// import UserContext from "./UserContext";


// function Venues({user, venues}){

    // NC
function Venues({venues}){
    // debugger;    

   

    // const { user } = useContext(UserContext)
    // NC end


    // const [venues, setVenues] = useState([])

    // useEffect(()=>{
    //     fetch(`/venues`)
    //     .then((r)=> r.json())
    //     .then((venues)=> {
    //         setVenues(venues)
    //         console.log(venues)
    //     })
    // },[])
    

    return(
        <Card.Group itemsPerRow={4}>
            {venues.map((venue) => (
                <Venue
                    key={venue.id} venue={venue}
                />
            ))}
        </Card.Group>
    );
}

export default Venues;