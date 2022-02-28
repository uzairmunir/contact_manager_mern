import React from 'react';
import AuthProvider from './context/auth/AuthContext';
import RouteConfig from './RouteConfig';
import ContactProvider from './context/contact/ContactContext';

const App = () => {
  return (
    <>
      <AuthProvider>
        <ContactProvider>
          <RouteConfig />
        </ContactProvider>
      </AuthProvider>
    </>
  );
};

export default App;
