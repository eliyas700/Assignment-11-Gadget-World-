import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import PageTitle from "../PageTitle/PageTitle";
import "./Header.css";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
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
              {user ? (
                <>
                  <Nav.Link as={Link} to="/manageitems">
                    Manage Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/additems">
                    Add Items
                  </Nav.Link>
                  <Nav.Link>My Items</Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "white",
                      }}
                      onClick={handleSignOut}
                    >
                      <small style={{ textTransform: "none" }}>
                        <img
                          title={user?.email}
                          height={28}
                          className="rounded-circle mx-2"
                          src={user?.photoURL}
                          alt={user?.displayName}
                          srcSet=""
                        />
                      </small>
                      Sign Out
                    </button>
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Log In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
