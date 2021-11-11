import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import { AuthContext } from './context/authContext';
import MotoristaListPage from './pages/MotoristaListPage';
import VeiculoListPage from './pages/VeiculoListPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={
          <LoginPage />
        } path="/login" />

        <Route element={
          <CustomRoute>
            <MotoristaListPage />
          </CustomRoute>
        } path="/" />
        <Route element={
          <CustomRoute>
            <Navigate to="/" />
          </CustomRoute>
        } path="/motorista/list" />
        <Route element={
          <CustomRoute>
          </CustomRoute>
        } path="/motorista/add" />
        <Route element={
          <CustomRoute>
          </CustomRoute>
        } path="/motorista/update/:id" />
        <Route element={
          <CustomRoute>
          </CustomRoute>
        } path="/motorista/veiculo/:id" />
        <Route element={
          <CustomRoute>
            <VeiculoListPage />
          </CustomRoute>
        } path="/veiculo/list" />
        <Route element={
          <CustomRoute>
          </CustomRoute>
        } path="/veiculo/add" />
        <Route element={
          <CustomRoute>
          </CustomRoute>
        } path="/veiculo/update/:id" />

        <Route path="/*" element={"404"} />
      </Routes>
    </BrowserRouter>
  );
}

function CustomRoute({ children }) {
  const context = useContext(AuthContext);
  return context.isAuthenticated ? children : <Navigate to="/login" />
}

export default App;
