import React, {useEffect, useState} from 'react';
import '../App.css';
import Header from './Header';
import Venues from './Venues';
import NavBar from './NavBar';
import { Switch, Route } from "react-router-dom";
import VenueListing from './VenueListing';
import Login from './Login';
import Account from './Account';

function App() {
  const [user, setUser] = useState(null);


  return (
    <div className="App">
      {/* <p>Hello: {user.username}</p> */}
      <Header/>


      { !user ? <Login onLogin={setUser} /> : 
        <div> 
          <NavBar user={user}/>
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
          </Switch> 
        </div>
      }

    </div>
  );
}

export default App;