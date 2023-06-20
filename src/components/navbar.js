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
              <img
                src="../img/bet69.png"
                alt="logo"
                style={{ height: "100px", width: "300px" }}
              />
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
              <Nav.Link>
                <Link to="/invoicedetails">Invoice Details</Link>
              </Nav.Link>
              <NavDropdown title="League" id="navbarScrollingDropdown">
                <NavDropdown.Item>Champion League</NavDropdown.Item>
                <NavDropdown.Item>Premier League</NavDropdown.Item>
                <NavDropdown.Item>La Liga</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Link to="/cart">
            <Button
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              variant="outline-primary"
              className="rounded-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
              </div>
            </Button>
            </Link>

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
