import React from 'react';

function LoginBox() {
  return (
    <div className="LoginBox" style={{border: "2px solid black"}}>
      <header className="login-box-header">
        <h1> Login </h1>
      <form method="POST" action='/login'>
        <input name="username" type="text" placeholder="username"/>
        <input name="password" type="password" placeholder="password"/>
        <input type='submit' value="login"/>
        </form>
      </header>
    </div>
  );
}

export default LoginBox;