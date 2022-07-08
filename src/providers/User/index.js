import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { useAuth } from "../Auth";

const UserContext = createContext();

const token = localStorage.getItem("token");

let { user_id } = token ? jwt_decode(localStorage.getItem("token")) : "";
const initialState = { id: user_id };

export const UserProvider = ({ children }) => {
  const { authToken } = useAuth;
  const [user, setUser] = useState(initialState);
  const [userToken, setUserToken] = useState(authToken || "");

  useEffect(() => {
    api
      .get(`user/${user_id}/`)
      .then((response) => {
        setUser({
          id: response.data.id,
          username: response.data.username,
          email: response.data.email,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, userToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
