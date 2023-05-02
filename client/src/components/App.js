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

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser({
          id: user.id,
          username: user.username
        }));
      }
    });
  }, []);

  return (
    <div className="App">
      <Header/>

      { !user ? <Login onLogin={setUser} /> : 
        <div> 
          <NavBar user={user} setUser={setUser}/>
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