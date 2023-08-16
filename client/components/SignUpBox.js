import React from 'react';

function SignUpBox() {
  // Submit signup info to DB
  return (
    <div className="SignUpBox" style={{border: "2px solid black"}}>
      <header className="signup-box-header">
        <h1> Sign Up </h1>
      <form method="POST" action='/signup'>
        <input name="username" type="text" placeholder="username"/>
        <input name="password" type="password" placeholder="password"/>
        <input type='submit' value="sign up"/>
        </form>
      </header>
    </div>
  );
}



export default SignUpBox;