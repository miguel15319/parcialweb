import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/Logo.png";
import local from "../assets/local.png"
import zona from "../assets/zona.png"
import user from "../assets/user.png"
import "../styles/NavbarDashboard.css";



const NavbarDashboard = () => {
  const usuario = localStorage.getItem("username");

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <img className="logo" src={logo} alt="logo" />
        <Navbar.Brand href="#home">{usuario}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <NavDropdown title="Productos" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Tortas y postres</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Bebidas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Regalos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Combos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">Antojos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6">Panes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.7">Celebraciones</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.8">Hojaldres</NavDropdown.Item>
        </NavDropdown>        

        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ml-auto custom-nav">
            <img className="icon" src={local} alt="local" />
            <Nav.Link href="#tiendas">Localizar tienda</Nav.Link>

            <img className="icon" src={zona} alt="zona" />
            <Nav.Link href="#zona">Cobertura</Nav.Link>

            <img className="icon" src={user} alt="" />
            <Nav.Link href="#MiCuenta">Mi cuenta</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarDashboard;
