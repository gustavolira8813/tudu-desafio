import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import "./style";
import { ContainerMenuFooter } from "./style";
const MenuFooter = () => {
  return (
    <ContainerMenuFooter>
      <ul>
        <li>
          <FontAwesomeIcon className="menu-items" icon={faHome} />
        </li>
        <li>
          <FontAwesomeIcon className="menu-items" icon={faCalendar} />
        </li>
        <li>
          <FontAwesomeIcon className="menu-items" icon={faUser} />
        </li>
        <li>
          <FontAwesomeIcon className="menu-items-add" icon={faCirclePlus} />
        </li>
      </ul>
    </ContainerMenuFooter>
  );
};
export default MenuFooter;
