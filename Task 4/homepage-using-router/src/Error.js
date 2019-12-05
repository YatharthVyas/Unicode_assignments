import React from 'react';

function ErrorPage(){
  return(
    <React.Fragment>
      <div className="alert-warning">
        <h3 className="alert-heading">Aww, Snap!</h3>
        <p>There was an error fetching your webpage or you entered an invalid link</p>
      </div>
    </React.Fragment>
    )
}

export default ErrorPage;