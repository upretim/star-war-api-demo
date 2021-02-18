import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
  const URL ="https://swapi.dev/api/planets/1/"
 return fetch(URL, {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json'
   }
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const validateForm=() =>{
    return username.length > 4 && password.length > 4;
  }
  

 const handleSubmit = async e => {
  e.preventDefault();
  const token = await loginUser({
    username,
    password
  });
  if((username=="Luke Skywalker") && (password =="19BBY"))
    setToken(token);
    else{
      setErrorMessage("Username or password is incorrect.")
    }
}

return(
  <div className="login-wrapper container">
      <h5>Please Log In</h5>
    <div >
  
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label> Username </label>
        <input type="text" className="form-control" onChange={e => setUserName(e.target.value)} />
      </div>
      <div className="form-group">
      <label> Password </label>
        <input type="password"  className="form-control" onChange={e => setPassword(e.target.value)} />
      <div>
      </div>
       <div>
       <button className="btn btn-primary float-right text-uppercase mt-2" type="submit" disabled={!validateForm()}
        >Submit</button>
       </div>
        
      </div>
    </form>
    </div>
    {errorMessage?<span className="alert alert-danger">{errorMessage}</span>:null}
  </div>
)
}


Login.propTypes = {
setToken: PropTypes.func.isRequired
};