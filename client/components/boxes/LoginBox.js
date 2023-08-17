import React, { useState } from 'react';

function LoginBox() {
  // Handle State
  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  
  // Async function to handle fetch request

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/sheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      console.log('Login request Sent');
      if (response.ok) {
        console.log('Login response ok.')
      } else {
        console.log('Login failed.')
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  //Component body
  return (
    <div className="LoginBox" style={{border: "2px solid black"}}>
      <header className="login-box-header">
        <h1> Login </h1>
      <form method="POST" action='/login'>
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
        <input type='submit' value="login" onClick = {handleLogin}/>
        </form>
      </header>
    </div>
  );
}

export default LoginBox;