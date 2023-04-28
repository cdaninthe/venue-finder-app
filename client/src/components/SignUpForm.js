import React from "react";

function SignUpForm() {
    return (
        <div>
            <form>
                USER SIGN UP
                <br />
                <label>Username: </label><br />
                <input type="text" name="username"/>
                <br /><br />
                <label>Password (8 characters minimum): </label><br />
                <input type="password" name="password"/>
                <br /><br />
                <button>SUBMIT</button>
                <p>Already have an account?  <a className="App-link">Sign In</a></p>
            </form>
        </div>
    );
  }
  
  export default SignUpForm;
