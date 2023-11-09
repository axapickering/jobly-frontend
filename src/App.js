import { BrowserRouter, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import './App.css';
import Nav from './navigation/Nav';
import RouteList from './navigation/RouteList';
import userContext from './context/userContext';
import JoblyApi from './api';
import { jwtDecode } from "jwt-decode";


/**Renders Jobly,
 *
 * State:
 * - user: stores the current users username
 * - token: stores the token returned from the API
 *
 * App -> {Nav, RouteList}
 */
function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);


  useEffect(function () {
    async function fetchUserInfo() {
      if (token !== null) {
        // let user = await JoblyApi.getUserInfo(token);
        const userInfo = jwtDecode(token);
        setUser(userInfo);

      } else {

        setUser(null);
      }
    }

    fetchUserInfo();

  }, [token]);


  /**Takes user inputted data calls api to register user, returns token on success */
  async function signup(formData) {
    console.log("IN SIGNUP", formData)
    let res = await JoblyApi.signup(formData);

    if (res.error) {
      <Navigate to='/signup' error={res.error} />;
    }

    setToken(res.token);
  }

  /**Takes user inputted data calls api to login the user, returns token on success */
  async function login(formData) {
    let res = await JoblyApi.login(formData);

    if (res.error) {
      <Navigate to='/login' error={res.error} />;
    }

    setToken(res.token);

  }

  /**Logs user out */
  function logout() {
    setToken(null);
  }

  return (
    <userContext.Provider value={user}>
      <BrowserRouter>
        <Nav logout={logout} />
        <div className='App container'>
          <div className='row'>
            <div className='col-11'>
              <RouteList signup={signup} login={login} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
