import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
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
      </Routes>
    </BrowserRouter>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route {...rest}>
      { children }
    </Route>
  )
}

export default App;
