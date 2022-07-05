import CardTask from "../../components/CardTask";
import {
  MainContainer,
  ToDoContainer,
  ProgressContainer,
  CompletedContainer,
} from "./style";
const Main = () => {
  const tasks = [
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "todo",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "completed",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "completed",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "completed",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "completed",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "completed",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "todo",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "todo",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "todo",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "todo",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "todo",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "easy",
      status: "todo",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "easy",
      status: "todo",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "easy",
      status: "todo",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "easy",
      status: "todo",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "todo",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "progress",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "easy",
      status: "progress",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "progress",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "progress",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "progress",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "progress",
    },
    {
      title: "titulo da task",
      description: "A descrição dessa tarefa",
      type: "hard",
      status: "progress",
    },
  ];
  return (
    <MainContainer>
      <h2>Tarefas</h2>

      <ToDoContainer>
        <h3>A fazer</h3>
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
        <h3>Em progresso</h3>
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
        <h3>Concluído</h3>
        <ul className="completed-list">
          {tasks
            .filter((e) => e.status === "completed")
            .map((e, i) => (
              <CardTask tasks={e} />
            ))}
        </ul>
        <span>Ver todos</span>
      </CompletedContainer>
    </MainContainer>
  );
};

export default Main;
