import { createContext, useContext, useState } from "react";
import api from "../../services";
const AuthContext = createContext();

const initialToken = localStorage.getItem("token");

const initialState = initialToken ? true : false;

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const logout = () => {
    localStorage.clear();
    setAuth(false);
  };
  const logon = (data) => {
    api
      .post("login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);

        setAuth(response.data.token);
      })
      .catch((err) => console.log(err));
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, logon }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
