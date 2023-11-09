import React from 'react';
import { useParams } from "react-router-dom";

function NotFound() {
  const { handle } = useParams();

  return (
    <div>
      <h1>{handle} does not exist!</h1>
    </div>
  );
}

export default NotFound;