import './App.css';
// import Form from './components/Form';
// import SignupForm from './components/SignupForm';
// import SignupFormExercicio from './components/SignupFormExercicio';
import React from 'react';
import MovieHeader from './components/MovieHeader';
import CreateMoviePage from './pages/CreateMoviePage';
import ListMoviePage from './pages/ListMoviePage';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import CheckoutHeader from './components/CheckoutHeader';
import CheckoutPage from './pages/CheckoutPage';
import UpdateMoviePage from './pages/UpdateMoviePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/movieList">
            <MovieHeader />
            <ListMoviePage />
          </Route>
          <Route path="/movieCreate">
            <MovieHeader />
            <CreateMoviePage />
          </Route>
          <Route path="/checkout">
            <CheckoutHeader />
            <CheckoutPage />
          </Route>
          <Route path="/listMovie">
            <Redirect to="/movieList" />
          </Route>
          <Route path="/updateMovie/:id/:slug">
            <CheckoutHeader />
            <UpdateMoviePage />
          </Route>
          <Route>
            404
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
