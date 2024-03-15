import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

const NavNetflix = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="navNetflix">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} width="100px" height="55px" alt="logo Netflix" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarSupportedContent"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-expanded="false"
        />

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#home" className="active fw-bold">
              Home
            </Nav.Link>

            <Nav.Link href="#tvShows" className="fw-bold">
              TV Shows
            </Nav.Link>

            <Nav.Link href="#home" className="fw-bold">
              Movies
            </Nav.Link>

            <Nav.Link href="#recentlyAdded" className="fw-bold">
              Recently Added
            </Nav.Link>

            <Nav.Link href="#myList" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavNetflix;
