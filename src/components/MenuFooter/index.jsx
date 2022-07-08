import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import "./style";
import { useTasks } from "../../providers/Task";
import { ContainerMenuFooter } from "./style";
import { useNavigate } from "react-router-dom";
const MenuFooter = () => {
  const { handleClickOpenModal } = useTasks();
  const navigate = useNavigate();
  const addTask = () => {
    navigate("/main");
    handleClickOpenModal();
  };
  return (
    <ContainerMenuFooter>
      <ul>
        <li>
          <FontAwesomeIcon
            onClick={() => navigate("/main")}
            className="menu-items"
            icon={faHome}
          />
        </li>
        <li>
          <FontAwesomeIcon
            onClick={() => navigate("/planner")}
            className="menu-items"
            icon={faCalendar}
          />
        </li>
        <li>
          <FontAwesomeIcon
            onClick={() => navigate("/profile")}
            className="menu-items"
            icon={faUser}
          />
        </li>
        <li>
          <FontAwesomeIcon
            onClick={addTask}
            className="menu-items-add"
            icon={faCirclePlus}
          />
        </li>
      </ul>
    </ContainerMenuFooter>
  );
};
export default MenuFooter;
