import React from 'react';
import AuthProvider from './context/auth/AuthContext';
import RouteConfig from './RouteConfig';

const App = () => {
  return (
    <>
      <AuthProvider>
        <RouteConfig />
      </AuthProvider>
    </>
  );
};

export default App;
