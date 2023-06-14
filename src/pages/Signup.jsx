import React from 'react'

const Signup = () => {
  return (
    <div className="container">
      <div className="text">
        <div className="container_texto">
          <h1>Welcome,</h1>
          <p>To continue browsing safely, log in to the network.</p>
        </div>
        <div className="container_login">
          <h1>Login</h1>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Log in</button>
        </div>

      </div>
      <div className="logo"></div>
    </div>
  )
}

export default Signup