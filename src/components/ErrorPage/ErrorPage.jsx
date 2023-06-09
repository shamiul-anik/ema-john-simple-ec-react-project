import React from 'react';
import { useRouteError } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {

  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.data}</i>
        <i>{error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;