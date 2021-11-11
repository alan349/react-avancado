import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import { AuthContext } from './context/authContext';

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route element={
          <CustomRoute isLogin="true">
            <LoginPage />
          </CustomRoute>
        } path="/" />

        <Route element={
          <CustomRoute>
          </CustomRoute>
        } path="/motoristaList" />
        <Route element={
          <CustomRoute>
          </CustomRoute>
        } path="/motoristaAdd" />
        <Route element={
          <CustomRoute>
          </CustomRoute>
        } path="/motoristaUpdate/:id" />
        <Route element={
          <CustomRoute>
          </CustomRoute>
        } path="/motoristaVeiculos/:id" />
        <Route element={
          <CustomRoute>
          </CustomRoute>
        } path="/veiculoList" />
        <Route element={
          <CustomRoute>
          </CustomRoute>
        } path="/veiculoAdd" />
        <Route element={
          <CustomRoute>
          </CustomRoute>
        } path="/veiculoUpdate/:id" />

        <Route path="/*" element={"404"} />
      </Routes>
    </BrowserRouter>
  );
}

function CustomRoute({ children, isLogin }) {
  const context = useContext(AuthContext);
  if (isLogin) {
    return !context.isAuthenticated ? children : <Navigate to="/motoristaList" />
  }
  return context.isAuthenticated ? children : <Navigate to="/" />
}

export default App;
