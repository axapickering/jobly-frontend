import React from 'react';

function Alert({alerts, isSuccess}) {
  let alertColor = isSuccess ? "alert alert-success mt-3" : "alert alert-danger mt-3"

  return (
    <div className={alertColor} role="alert">
        {alerts.map(alert => <p>{alert}</p>)}
    </div>
  )
}
export default Alert;