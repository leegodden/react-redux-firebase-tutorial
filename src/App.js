import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Registration from './pages/Registration';
import MainLayout from './layouts/MainLayout';
import HomeLayout from './layouts/HomeLayout';

import { auth, handleUserProfile } from './firebase/utils';

import './styles/styles.scss';
import Login from './pages/Login';

const initialState = {
  currentUser: null
};

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      ...initialState
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      /// if user is signed in
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
      /// set currentUser back to null if user not signed in
      this.setState({
        ...initialState
      });
    });
  }
  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomeLayout currentUser={currentUser}>
                <Home />
              </HomeLayout>
            )}
          />
          <Route
            path="/registration"
            render={() => currentUser ? <Redirect to='/' /> : (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            )}
          />

          <Route
            path="/login"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <MainLayout currentUser={currentUser}>
                  <Login />
                </MainLayout>
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;

// ON VIDEO 5
