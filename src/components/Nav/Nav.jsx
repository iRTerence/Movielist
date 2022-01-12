import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>Movie Watcher</Navbar.Brand>
        <Nav className='me-auto'>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink exact to='/liked'>
            Liked
          </NavLink>
        </Nav>
      </Navbar>
    </>
  );
}
