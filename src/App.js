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
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <RouteList />
      </BrowserRouter>
    </div>
  )
}

export default App;
