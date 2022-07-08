import { type } from "@testing-library/user-event/dist/type";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useUser } from "../User";
const AuthContext = createContext();

const initialToken = localStorage.getItem("token");

const initialState = initialToken ? true : false;

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const logout = () => {
    localStorage.clear();
    setAuth(false);
  };
  const users = [
    {
      email: "gus@mail.com",
      password: 123,
      tasks: [
        {
          title: "Correr maratona",
          description: "A descrição dessa tarefa",
          type: "hard",
          deadline: "10/08/2022",
          subtasks: [{ title: "subtarefa exemplo", status: false }],
          status: "todo",
          progress: 0,
        },
        {
          title: "Pular Corda",
          description: "A descrição dessa tarefa",
          type: "hard",
          deadline: "10/08/2022",
          subtasks: [{ title: "subtarefa exemplo", status: true }],
          status: "completed",
          progress: 100,
        },
        {
          title: "Academia da cidade",
          description: "A descrição dessa tarefa",
          type: "hard",
          deadline: "10/08/2022",
          subtasks: [{ title: "subtarefa exemplo", status: true }],
          status: "completed",
          progress: 100,
        },
        {
          title: "Projetar um site",
          description: "A descrição dessa tarefa",
          type: "hard",
          deadline: "10/08/2022",
          subtasks: [{ title: "subtarefa exemplo", status: true }],
          status: "completed",
          progress: 100,
        },
        {
          title: "festa de fulana",
          description: "A descrição dessa tarefa",
          type: "medium",
          deadline: "10/08/2022",
          subtasks: [{ title: "subtarefa exemplo", status: true }],
          status: "completed",
          progress: 11,
        },
        {
          title: "titulo da task",
          description: "A descrição dessa tarefa",
          type: "medium",
          deadline: "10/08/2022",
          subtasks: [{ title: "subtarefa exemplo", status: true }],
          status: "completed",
          progress: 100,
        },
      ],
    },
    { email: "gus1@mail.com", password: 1234 },
    { email: "gus2@mail.com", password: 12345 },
  ];
  const logon = (data, navigate) => {
    const { email, password } = data;

    const user = users.find((user) => {
      return user.email === email;
    });

    if (!user) {
      return console.log("Email ou senha incorreto.");
    }

    if (String(user.password) !== String(data.password)) {
      return console.log("senha inválida.");
    }
    navigate("/main");
    return console.log("logado com sucesso");
  };
  const logar = (data, navigate) => {
    api
      .post("login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setAuth(response.data.token);
        navigate("/main");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const register = (data) => {};
  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, logon }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
