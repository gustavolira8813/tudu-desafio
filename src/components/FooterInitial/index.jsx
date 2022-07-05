import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style";
import { FooterContainer } from "./style";
import Login from "../../pages/Login";
import { Container } from "../../styles/GlobalStyle";
const FooterInitial = ({ page }) => {
  return (
    <FooterContainer page={page}>
      {page === "welcome" ? (
        <FontAwesomeIcon className="arrowUp" icon={faLongArrowAltUp} />
      ) : (
        <div className="mini-bar"></div>
      )}
      <div className="horizontal-bar"></div>
    </FooterContainer>
  );
};

export default FooterInitial;
