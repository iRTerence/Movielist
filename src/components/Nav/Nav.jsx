import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function NavBar() {
  return (
    <>
      <Navbar variant='dark' className='nav-bar'>
        <Container>
          <Navbar.Brand className='title'>Popular Movie Posters</Navbar.Brand>
          <Nav className='me-auto'>
            <NavLink exact to='/'>
              Home
            </NavLink>
            <NavLink exact to='/liked'>
              Liked
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
