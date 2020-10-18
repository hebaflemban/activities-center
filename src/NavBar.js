import React from "react";
// import { NavLink, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { connect } from "react-redux";

const NavBar = ({ user }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">ARC</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/classes">Classes</Nav.Link>
          <Nav.Link href="/gyms">Gyms</Nav.Link>
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item href={`/categories/KickBoxing`}>
              KickBoxing
            </NavDropdown.Item>

            <NavDropdown.Item href={`/categories/cardio`}>
              cardio
            </NavDropdown.Item>
            <NavDropdown.Item href={`/categories/yoga`}>Yoga</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href={`/categories/swimming`}>
              Swimming
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href={`/bookings/${user.id}`}>My Bookings</Nav.Link>
          <Nav.Link eventKey={2} href="/login">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStatesToProps = (state) => {
  return {
    user: state.userState,
  };
};

export default connect(mapStatesToProps)(NavBar);
