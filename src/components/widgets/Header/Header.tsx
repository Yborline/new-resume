import { NavLink } from "react-router-dom";
import "./Header.sass";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ThemeToggle from "../../shared/ThemeButton/ThemeButton.tsx";
import { ThemeContext, Theme } from "../../../context/Theme/ThemeContext.tsx";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="navbar_box-left">
          <NavLink className="title" to="/">
            My resume
          </NavLink>
          <ThemeContext.Consumer>
            {({ theme, setTheme }) => (
              <ThemeToggle
                onChange={() => {
                  if (theme === Theme.Light) setTheme(Theme.Dark);
                  if (theme === Theme.Dark) setTheme(Theme.Light);
                }}
                value={theme === Theme.Dark}
              />
            )}
          </ThemeContext.Consumer>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="link" to="/">
              Resume
            </NavLink>
            <NavLink className="link" to="letter">
              Cover Letter
            </NavLink>
            <NavLink className="link" to="projects">
              Projects
            </NavLink>
            <NavLink className="link" to="games/card_games">
              Game
            </NavLink>
            <NavLink className="link" to="contacts">
              Contacts
            </NavLink>

            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#game">Game</Nav.Link> */}

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
