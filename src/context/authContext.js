import React from "react";

import { authenticate } from "../services/movieApi";

const AuthContext = React.createContext({});

function AuthProvider(props) {

  const [token, setToken] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState({ id: null, nome: "" })

  React.useEffect(() => {
    const tokenStored = localStorage.getItem("token");
    if (tokenStored !== null) {
      setToken(tokenStored);
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [])

  React.useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsAuthenticated(false);
    }
  }, [token, user])

  async function login(login, password) {
    const response = await authenticate(login, password);
    if (response.status === 200 && response.data.auth === true) {
      setToken(response.data.token);
      setUser({ id: 1, name: "Alan" });
      return true;
    }
    return false;
  }

  async function logout() {
    setToken(null);
    setUser({});
    return true;
  }

  return (
    <AuthContext.Provider value={{
      token,
      isAuthenticated,
      user: user,
      login: login,
      logout: logout
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };