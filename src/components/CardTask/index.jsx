import { TaskItem } from "./style";
const CardTask = ({ tasks }) => {
  return (
    <TaskItem type={tasks}>
      {tasks.status === "todo" && <input type="checkbox" name="" id="" />}
      {tasks.status === "completed" && <input checked type="checkbox" />}
      <div>
        <h2>{tasks.title}</h2>
        <p>{tasks.description}</p>
      </div>
      {tasks.status === "progress" && (
        <div>
          <span>50%</span>
          <progress max={100} value={50} />
        </div>
      )}
    </TaskItem>
  );
};

export default CardTask;
