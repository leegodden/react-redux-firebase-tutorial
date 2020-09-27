import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Registration from './pages/Registration';
import MainLayout from './layouts/MainLayout';
import HomeLayout from './layouts/HomeLayout';

import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomeLayout>
              <Home />
            </HomeLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;

// UP TO  VIDEO 2 19:25
