import { Title, Container } from "../../styles/GlobalStyle";
import ChecklistImg from "../../assets/img/welcome/Checklist.jpg";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style.css";
const Welcome = () => {
  return (
    <Container>
      <div className="welcome-page">
        <Title>Bem vindo!</Title>
        <img className="welcomeImg" src={ChecklistImg} alt="checklistHome" />
        <p>Organize o seu dia com Tudu.</p>
        <div className="circle-container">
          <div className="circle-items circle-items-selected"></div>
          <div className="circle-items "></div>
          <div className="circle-items "></div>
          <div className="circle-items "></div>
        </div>

        <div className="welcome-footer">
          <Link to="/login">
            {" "}
            <FontAwesomeIcon className="arrowUp" icon={faLongArrowAltUp} />
          </Link>
        </div>
        <span className="footer-bar"></span>
      </div>
    </Container>
  );
};

export default Welcome;
