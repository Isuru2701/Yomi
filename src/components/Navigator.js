import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';

function Navigator() {
  return (
    <Navbar expand="lg" className="bg-background  w-full flex-row">
      <Container >
        <Navbar.Brand href="/"><h1>Yomi</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav>
            <Nav.Link href="/catalog" className="text-highlight hover:text-white">Find Manga</Nav.Link>
            <Nav.Link href="/collection" className="text-highlight hover:text-white">My Collection</Nav.Link>
          </Nav>
          <NavDropdown title="Account" id="basic-nav-dropdown" menuVariant="dark" className="text-highlight hover:text-white bg-background">
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigator;
