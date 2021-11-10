import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <PrivateRoute path="/motoristaList">
        </PrivateRoute>
        <PrivateRoute path="/motoristaAdd">
        </PrivateRoute>
        <PrivateRoute path="/motoristaUpdate/:id">
        </PrivateRoute>
        <PrivateRoute path="/motoristaVeiculos/:id">
        </PrivateRoute>
        <PrivateRoute path="/veiculoList">
        </PrivateRoute>
        <PrivateRoute path="/veiculoAdd">
        </PrivateRoute>
        <PrivateRoute path="/veiculoUpdate/:id">
        </PrivateRoute>

        <Route>
          404
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
