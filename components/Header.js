import React from "react";
import { Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="navbar-style" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand href="#home">
            <Image src="image/img6.jpg" className="logo-style" roundedCircle />
            <h5 className="logo-name my-3">
              Visvesvaraya Technological University
            </h5>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link href="#About">About</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Academics" id="basic-nav-dropdown">
              <LinkContainer to="/circular">
                <NavDropdown.Item href="#">
                  Circular & Notification
                </NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/circular">
                <NavDropdown.Item href="#">Admissions</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/circular">
                <NavDropdown.Item href="#">
                  Certifications Issued
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <NavDropdown title="Examination" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">
                Examination Guidelines
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Exam Application</NavDropdown.Item>

              <LinkContainer to="/result">
                <NavDropdown.Item href="#">Result</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <NavDropdown title="Departments" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">CSE</NavDropdown.Item>
              <NavDropdown.Item href="#">ECE</NavDropdown.Item>
              <NavDropdown.Item href="#">EEE</NavDropdown.Item>
              <NavDropdown.Item href="#">ME</NavDropdown.Item>
              <NavDropdown.Item href="#">Result</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default Header;
