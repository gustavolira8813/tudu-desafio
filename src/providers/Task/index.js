import { useState, createContext, useContext } from "react";
import api from "../../services/api";
import { useUser } from "../User";

const TasksContext = createContext();
const taskEx = [
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
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "medium",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: false }],
    status: "todo",
    progress: 33,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "medium",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: false }],
    status: "todo",
    progress: 29,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "hard",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: false }],
    status: "todo",
    progress: 100,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "hard",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: false }],
    status: "todo",
    progress: 76,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "hard",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: false }],
    status: "todo",
    progress: 100,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "easy",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: false }],
    status: "todo",
    progress: 100,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "easy",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: false }],
    status: "todo",
    progress: 45,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "easy",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: true }],
    status: "todo",
    progress: 100,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "easy",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: true }],
    status: "todo",
    progress: 100,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "hard",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: true }],
    status: "todo",
    progress: 70,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "hard",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: true }],
    status: "progress",
    progress: 100,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "easy",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: true }],
    status: "progress",
    progress: 100,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "hard",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: true }],
    status: "progress",
    progress: 100,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "hard",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: true }],
    status: "progress",
    progress: 27,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "hard",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: true }],
    status: "progress",
    progress: 100,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "hard",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: true }],
    status: "progress",
    progress: 42,
  },
  {
    title: "titulo da task",
    description: "A descrição dessa tarefa",
    type: "hard",
    deadline: "10/08/2022",
    subtasks: [{ title: "subtarefa exemplo", status: true }],
    status: "progress",
    progress: 56,
  },
];

export const TaskProvider = ({ children }) => {
  const [taskOpenned, setTaskOpenned] = useState([]);
  const [tasks, setTasks] = useState(taskEx);
  const [insertModal, setInsertModal] = useState(false);
  const handleClickOpenModal = () => setInsertModal(true);
  const handleClickCloseModal = () => setInsertModal(false);
  const listarTasks = () => {
    api
      .get("tasks", {
        headers: { Authorization: `Bearer $` },
      })
      .then((response) => {
        setTasks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        insertModal,
        handleClickCloseModal,
        handleClickOpenModal,
        listarTasks,
        taskOpenned,
        setTaskOpenned,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
export const useTasks = () => useContext(TasksContext);
