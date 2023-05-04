import React, {useEffect, useState, useMemo} from 'react';
import '../App.css';
import Header from './Header';
import Venues from './Venues';
import NavBar from './NavBar';
import { Switch, Route } from "react-router-dom";
import VenueListing from './VenueListing';
import Login from './Login';
import Account from './Account';
import UserContext from './UserContext';

function App() {
  

  const [user, setUser] = useState(null);
  const [venues, setVenues] = useState([])

  //NC
  const value = useMemo(
    () => ({ user, setUser }), 
    [user]
  );
  // NC end 1st part
  

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser({
          id: user.id,
          username: user.username,
          venues: user.venues,
          reviews: user.reviews
        }));
      }
    });
  }, []);

  

    useEffect(()=>{
        fetch(`/venues`)
        .then((r)=> r.json())
        .then((venues)=> {
            setVenues(venues)
            console.log(venues)
        })
    },[])


  return (
    <div className="App">
      <Header/>

      { !user ? <Login onLogin={setUser} /> : 
        <div> 
          {/* NC */}
          <UserContext.Provider value={value}>
            <NavBar />
            <br />
            <Switch>
              <Route exact path="/account">
                <Account venues={venues} setVenues={setVenues}/>
              </Route>
              <Route exact path="/">
                <Venues venues={venues}/>
              </Route>
              <Route path="/venues/:id">
                <VenueListing venues={venues}/>
              </Route>
            </Switch> 
          </UserContext.Provider>
          {/* NC end tag */}


          {/* <NavBar user={user} setUser={setUser}/>
          <br />
          <Switch>
            <Route exact path="/account">
              <Account user={user}/>
            </Route>
            <Route exact path="/">
              <Venues user={user}/>
            </Route>
            <Route path="/venues/:id">
              <VenueListing user={user}/>
            </Route>
          </Switch>  */}
        </div>
      }    
    </div>
  );
}

export default App;