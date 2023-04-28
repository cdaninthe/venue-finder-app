import React from "react";

function SignInForm() {
    return (
        <div>
            <form>
                USER LOGIN
                <br />
                <label>Username: </label><br />
                <input type="text" name="username"/>
                <br /><br />
                <label>Password: </label><br />
                <input type="password" name="password"/>
                <br /><br />
                <button>SUBMIT</button>
                <p>Don't have an account yet?  <a className="App-link">Sign Up</a></p>
            </form>
        </div>
    );
  }
  
  export default SignInForm;
