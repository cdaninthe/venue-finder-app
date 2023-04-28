import '../App.css';
import Header from './Header';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Venues from './Venues';
import NavBar from './NavBar';
import { Switch, Route } from "react-router-dom";
import VenuePage from './VenuePage';


function App() {
  return (
    <div className="App">
      <Header/>
      <h1>GET STARTED</h1>
      <SignInForm />
      <SignUpForm />
      <Venues />

      <Switch>
        <Route exact path="/account">
          <NavBar />
        </Route>
        <Route exact path="/venues">
          <Venues />
        </Route>
        <Route path="/venues/:id">
          <VenuePage />
        </Route>
          
      </Switch> 
     
    </div>
  );
}

export default App;
