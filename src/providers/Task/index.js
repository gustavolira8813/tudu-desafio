import { useState, createContext, useContext } from "react";

const TasksContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
export const useTasks = () => useContext(TasksContext);
