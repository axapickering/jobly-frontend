import { BrowserRouter } from 'react-router-dom';
import React, { useState } from "react";
import './App.css';
import Nav from './navigation/Nav';
import RouteList from './navigation/RouteList';
import userContext from './context/userContext';

/**Renders App
 * App -> {Nav, RouteList}
 */
function App() {
  const [user, setUser] =  useState()
  //TODO:Login Call to API and set state function

  return (
    <userContext.Provider value={user}>
      <BrowserRouter>
      <Nav />
      <div className='App container'>
        <div className='row'>
          <div className='col-11'>
          <RouteList />
          </div>
        </div>
      </div>
      </BrowserRouter>
    </userContext.Provider>
  )
}

export default App;
