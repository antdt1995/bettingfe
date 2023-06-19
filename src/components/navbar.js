import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";


function NavScrollExample() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
             <img src="../img/bet69.png" alt="logo" style={{ height: '100px', width: '300px' }} />

            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/odds">Odd</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/signup">Signup</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/signin">Sign In</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/foodaholic">Foodaholic</Link>
              </Nav.Link>
              <NavDropdown title="League" id="navbarScrollingDropdown">
                <NavDropdown.Item>Champion League</NavDropdown.Item>
                <NavDropdown.Item>Premier League</NavDropdown.Item>
                <NavDropdown.Item>La Liga</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavScrollExample;
