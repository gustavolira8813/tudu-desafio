import {
  faLongArrowAltLeft,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import MenuFooter from "../../components/MenuFooter";
import { useTasks } from "../../providers/Task";
import "./style.css";
const TaskOpenned = () => {
  const { taskOpenned } = useTasks();
  const navigate = useNavigate();
  return (
    <div className="task-openned-page">
      <div className="task-openned-icons">
        <span>
          <FontAwesomeIcon
            icon={faLongArrowAltLeft}
            onClick={() => navigate("/main", { replace: true })}
          />
        </span>
        <span>
          <FontAwesomeIcon icon={faEllipsis} />
        </span>
      </div>

      <h2>{taskOpenned.title}</h2>
      <p>{taskOpenned.description}</p>
      <p>{taskOpenned.deadline}</p>
      <span></span>
      <ul>
        {taskOpenned["subtasks"].map((sub, i) => (
          <li key={i}>
            <h3>{sub.title}</h3>
            <input defaultChecked={sub.status} type="checkbox" name="" id="" />
          </li>
        ))}
      </ul>
      <MenuFooter />
    </div>
  );
};

export default TaskOpenned;
