import React, { useState } from 'react';

function SignUpBox() {
  // Handle state
  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');

  // Async function to handle fetch request
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
        console.log('Signup Request Sent');

      // Response handling
      if (response.ok) {
        console.log('Signup response ok.')
      } else {
        console.error('Sign up failed.')
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  };
  
  // Component body
  return (
    <div className="SignUpBox" style={{border: "2px solid black"}}>
      <header className="signup-box-header">
        <h1> Sign Up </h1>
      <form method="POST" action='/signup'>
        <input 
          name="username" type="text" placeholder="username"
          value = {username}
          onChange = {(e)=> setUsername(e.target.value)}
        />
        <input 
          name="password" type="password" placeholder="password"
          value = {password}
          onChange = {(e) => setPassword(e.target.value)}
        />
        <input type='submit' value="sign up" onClick = {handleSignUp}/>
        </form>
      </header>
    </div>
  );
}

export default SignUpBox;