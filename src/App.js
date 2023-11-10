import { BrowserRouter, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import './App.css';
import Nav from './navigation/Nav';
import RouteList from './navigation/RouteList';
import userContext from './context/userContext';
import JoblyApi from './api';
import { jwtDecode } from 'jwt-decode';
import Loading from './Loading';

/**Renders App
 * App -> {Nav, RouteList}
 */
function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoading, setIsloading] = useState(true)

  async function checkLocalStorage() {

  }
  useEffect(function () {
    async function fetchUserInfo() {
      if (token) {
        localStorage.setItem("token", token)
        JoblyApi.token = token;
        const userInfo = jwtDecode(token);
        try {
          let user = await JoblyApi.getUserInfo(userInfo.username);
          setUser(user);
        } catch (err) {
          console.error(err);
        }
      } else {
        localStorage.clear();
        setUser(null);
      }
      setIsloading(false);
    }

    fetchUserInfo();

  }, [token]);


  async function signup(formData) {
    let res = await JoblyApi.signup(formData);
    setToken(res.token);
  }

  //TODO:DISCSTRINGS
  async function login(formData) {
    let res = await JoblyApi.login(formData);
    setToken(res.token);
  }

  async function update(formData) {
    let res = await JoblyApi.update(formData);
    setUser(res);
  }


  function logout() {
    setToken(null);
  }

  if (isLoading) return <Loading />

  return (
    <userContext.Provider value={user}>
      <BrowserRouter>
        <Nav logout={logout} />
        <div className='App container'>
          <div className='row'>
            <div className='col-11'>
              <RouteList signup={signup} login={login} update={update} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
