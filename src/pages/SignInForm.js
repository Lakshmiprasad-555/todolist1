import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In:', email, password);
  };
  const history = useHistory();

  const navigateToOtherPage = () => {
    history.push('/Todolist'); 
  };

  return (
    <div className="form-container hover-form" style={{marginLeft:440,marginTop:100}}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={navigateToOtherPage}>Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
