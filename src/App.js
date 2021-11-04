import './App.css';
// import Form from './components/Form';
// import SignupForm from './components/SignupForm';
// import SignupFormExercicio from './components/SignupFormExercicio';
import React, { useContext } from 'react';

import CreateMoviePage from './pages/CreateMoviePage';
import ListMoviePage from './pages/ListMoviePage';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import CheckoutPage from './pages/CheckoutPage';
import UpdateMoviePage from './pages/UpdateMoviePage';
import LoginPage from './pages/LoginPage';
import { logout } from './services/auth';
import { AuthContext } from './context/authContext';


function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/logout">
            <LogoutRoute />
          </PrivateRoute>

          <PrivateRoute exact path="/">
            <ListMoviePage />
          </PrivateRoute>
          <PrivateRoute path="/movieList">
            <ListMoviePage />
          </PrivateRoute>
          <PrivateRoute path="/movieCreate">
            <CreateMoviePage />
          </PrivateRoute>
          <PrivateRoute path="/movieUpdate/:id">
            <UpdateMoviePage />
          </PrivateRoute>

          <PrivateRoute path="/listMovie">
            <Redirect to="/movieList" />
          </PrivateRoute>

          <PrivateRoute path="/checkout">
            <CheckoutPage />
          </PrivateRoute>

          <Route>
            404
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

function LogoutRoute() {
  logout();
  return (
    <Redirect to="/" />
  )
}

function PrivateRoute({ children, ...rest }) {
  const context = useContext(AuthContext);
  return (
    <Route {...rest}>
      {context.isAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  )
}

export default App;
