import React from "react";

import { authenticate } from "../services/loginApi";

const AuthContext = React.createContext({});

function AuthProvider(props) {

  const [token, setToken] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const tokenStored = localStorage.getItem("token");
    if (tokenStored !== null) {
      setToken(tokenStored);
    }
  }, [])

  React.useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
    }
  }, [token])

  async function login(login, password) {
    try {
      const response = await authenticate(login, password);
      if (response.status === 200 && response.data.token) {
        setToken(response.data.token);
        return true;
      }
    } catch (e) {
      return false;
    }

  }

  async function logout() {
    setToken(null);
    return true;
  }

  return (
    <AuthContext.Provider value={{
      token,
      isAuthenticated,
      login: login,
      logout: logout
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };