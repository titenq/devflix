import React from 'react';

import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import { UserStorage } from './context/UserContext';

const App = () => {
  return (
    <UserStorage>
      <Header />
      <Routes />
      <Footer />
    </UserStorage>
  );
};

export default App;
