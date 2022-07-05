import { Title, Container } from "../../styles/GlobalStyle";
import ChecklistImg from "../../assets/img/welcome/Checklist.jpg";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style.css";
import FooterInitial from "../../components/FooterInitial";
const Welcome = () => {
  return (
    <Container>
      <Title>Bem vindo!</Title>
      <img className="welcomeImg" src={ChecklistImg} alt="checklistHome" />
      <p>Organize o seu dia com Tudu.</p>
      <div className="circle-container">
        <div className="circle-items circle-items-selected"></div>
        <div className="circle-items "></div>
        <div className="circle-items "></div>
        <div className="circle-items "></div>
      </div>
      <Link to="/login">
        {" "}
        <FontAwesomeIcon className="arrowUp" icon={faLongArrowAltUp} />
      </Link>
      {/* <FooterInitial page="welcsomes" /> */}
    </Container>
  );
};

export default Welcome;
