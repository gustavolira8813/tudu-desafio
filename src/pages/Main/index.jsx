import CardTask from "../../components/CardTask";
import MenuFooter from "../../components/MenuFooter";
import TaskAdd from "../TaskAdd";
import { useTasks } from "../../providers/Task";
import { motion } from "framer-motion";
import {
  MainContainer,
  ToDoContainer,
  ProgressContainer,
  CompletedContainer,
} from "./style";
import { useEffect } from "react";
import { useUser } from "../../providers/User";
const Main = () => {
  const { tasks } = useTasks();
  const { user } = useUser();
  const { listarTasks } = useTasks();
  useEffect(() => {
    listarTasks();
  }, [user]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <MainContainer>
        <h2 className="">Tarefas</h2>

        <ToDoContainer>
          <h3 className="task-title">A fazer</h3>
          <ul className="todo-list">
            {tasks
              .filter((e) => e.status === "todo")
              .map((e, i) => (
                <CardTask tasks={e} />
              ))}
          </ul>
          <span>Ver todos</span>
        </ToDoContainer>
        <ProgressContainer>
          <h3 className="task-title">Em progresso</h3>
          <ul className="progress-list">
            {tasks
              .filter((e) => e.status === "progress")
              .map((e, i) => (
                <CardTask tasks={e} />
              ))}
          </ul>
          <span>Ver todos</span>
        </ProgressContainer>
        <CompletedContainer>
          <h3 className="task-title">Concluído</h3>
          <ul className="completed-list">
            {tasks
              .filter((e) => e.status === "completed")
              .map((e, i) => (
                <CardTask tasks={e} />
              ))}
          </ul>
          <span>Ver todos</span>
        </CompletedContainer>
        <TaskAdd />
        <MenuFooter />
      </MainContainer>
    </motion.div>
  );
};

export default Main;
