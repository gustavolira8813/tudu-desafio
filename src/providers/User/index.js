import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import api from "../../services";
import jwt_decode from "jwt-decode";

const UserContext = createContext();

const token = localStorage.getItem("token");

let { user_id } = token ? jwt_decode(localStorage.getItem("token")) : "";
const initialState = { id: user_id };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

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
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
