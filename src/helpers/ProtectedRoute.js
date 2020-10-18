import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { UserContext } from '../context/UserContext';

const ProtectedRoute = props => {
  const { login } = useContext(UserContext);

  if (login) {
    return <Route {...props} />;
  } else if (!login) {
    return <Redirect to='/login' />;
  } else {
    return null;
  }
};

export default ProtectedRoute;
