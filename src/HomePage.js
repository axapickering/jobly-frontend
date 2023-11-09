import './HomePage.css';
import userContext from './context/userContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders Homepage
 *
 *  RouteList => HomePage
 */
function HomePage() {

  const username = useContext(userContext)?.username;

  const toDisplay = username
    ? <p> Welcome back, {username}</p>
    : (
      <>

        <Link to={'/login'}>
          <button className="btn btn-primary">Login</button>
        </Link>

        <Link to={'/signup'}>
          <button className="btn btn-primary mt-2">Signup</button>
        </Link>

      </>
    );

  return (
    <div className='HomePage-container '>
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {toDisplay}
    </div>

  );
}

export default HomePage;