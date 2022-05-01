import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import "./Header.css";
const Header = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        style={{
          backgroundImage: "linear-gradient(to left,#21a2fd 0%,#7967fe 100%)",
        }}
      >
        <Container className="">
          <Navbar.Brand as={Link} to="/">
            <img
              height={"45px"}
              src="https://i.ibb.co/GsB0jkt/logo.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="home#produtcs">Products</Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">
                Log In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
