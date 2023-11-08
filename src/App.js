import { BrowserRouter } from 'react-router-dom';
import React from "react";
import './App.css';
import Nav from './Nav';
import RouteList from './RouteList';

/**Renders App
 * App -> {Nav, RouteList}
 */
function App() {
  return (
    <BrowserRouter>
    <Nav />
    <div className='App container'>
      <div className='row'>
        <div className='col-10'>


        <RouteList />

        </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
