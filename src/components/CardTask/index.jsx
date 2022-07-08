import { useNavigate } from "react-router-dom";
import { useTasks } from "../../providers/Task";
import { TaskItem } from "./style";
const CardTask = ({ tasks }) => {
  const { setTaskOpenned } = useTasks();
  const navigate = useNavigate();
  const openTask = () => {
    setTaskOpenned(tasks);
    navigate("/open", { replace: true });
  };
  return (
    <TaskItem onClick={openTask} type={tasks}>
      {tasks.status === "todo" && <input type="checkbox" name="" id="" />}
      {tasks.status === "completed" && <input checked type="checkbox" />}
      <div>
        <h2>{tasks.title}</h2>
        <p>{tasks.description}</p>
      </div>
      {tasks.status === "progress" && (
        <div>
          <span>{tasks.progress + "%"}</span>
          <progress max={100} value={tasks.progress} />
        </div>
      )}
    </TaskItem>
  );
};

export default CardTask;
