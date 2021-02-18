
import React, { useState } from 'react';
import Login from "./login/Login";
import Search from "./search/Search";
import './App.css';


function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
       {token? <Search/>: <Login setToken={setToken} />}
    </div>
  );
}

export default App;
