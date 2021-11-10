import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={
          <PrivateRoute>
          </PrivateRoute>
        } path="/motoristaList" />
        <Route element={
          <PrivateRoute>
          </PrivateRoute>
        } path="/motoristaAdd" />
        <Route element={
          <PrivateRoute>
          </PrivateRoute>
        } path="/motoristaUpdate/:id" />
        <Route element={
          <PrivateRoute>
          </PrivateRoute>
        } path="/motoristaVeiculos/:id" />
        <Route element={
          <PrivateRoute>
          </PrivateRoute>
        } path="/veiculoList" />
        <Route element={
          <PrivateRoute>
          </PrivateRoute>
        } path="/veiculoAdd" />
        <Route element={
          <PrivateRoute>
          </PrivateRoute>
        } path="/veiculoUpdate/:id" />

        <Route path="/*" element={"404"} />
      </Routes>
    </BrowserRouter>
  );
}

function PrivateRoute({ children }) {
  return true;
}

export default App;
