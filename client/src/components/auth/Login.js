import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e =>
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    console.log('Login submit');
  };

  return (
    <div classname="form-container">
      <h1>
        Account <span className="text-primary">Account Login</span>
      </h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="text" email="name" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" email="name" value={password} onChange={onChange} />
        </div>
        <input
          type="submit"
          value="login"
          className="btn btn-primary btn-block"
          onSubmit={onSubmit}
        />
      </form>
    </div>
  );
};

export default Login;
