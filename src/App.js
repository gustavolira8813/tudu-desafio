import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa3, faSave } from "@fortawesome/free-solid-svg-icons";
import { faAngry, faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { Title } from "./styles/GlobalStyle";
import Welcome from "./pages/Welcome";
import MenuFooter from "./components/MenuFooter";
import FooterInitial from "./components/FooterInitial";
import Main from "./pages/Main";
import { Menu } from "@mui/material";
function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <MenuFooter />
    </div>
  );
}

export default App;
