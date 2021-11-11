import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import { AuthContext } from './context/authContext';
import MotoristaListPage from './pages/MotoristaListPage';
import MotoristaAddPage from './pages/MotoristaAddPage';
import VeiculoListPage from './pages/VeiculoListPage';
import VeiculoAddPage from './pages/VeiculoAddPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={
          <LoginPage />
        } path="/login" />

        <Route element={
          <CustomRoute>
            <VeiculoListPage />
          </CustomRoute>
        } path="/" />
        <Route element={
          <CustomRoute>
            <MotoristaListPage />
          </CustomRoute>
        } path="/motorista/list" />
        <Route element={
          <CustomRoute>
            <MotoristaAddPage />
          </CustomRoute>
        } path="/motorista/add" />
        <Route element={
          <CustomRoute>
            <Navigate to="/" />
          </CustomRoute>
        } path="/veiculo/list" />
        <Route element={
          <CustomRoute>
            <VeiculoAddPage />
          </CustomRoute>
        } path="/veiculo/add" />

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
