import React from 'react';
import { useParams } from "react-router-dom";

/**
 * NotFound renders text to show user if user is on page that does not exist
 * RouteList -> NotFound
 */
function NotFound() {
  const { handle } = useParams();

  return (
    <div>
      <h1>{handle} does not exist!</h1>
    </div>
  );
}

export default NotFound;