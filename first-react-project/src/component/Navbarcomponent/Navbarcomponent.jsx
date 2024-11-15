import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, FormControl, Button } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaArrowAltCircleRight } from "react-icons/fa";

const Navbarcomponent = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <Navbar expand="lg" className="p-2 HOnavstyle">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/src/assets/images/logo.svg" alt="logo" style={{ maxHeight: "40px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Home" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/action1">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action2">Another action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/separated-link">Separated link</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/about">About</Nav.Link>

            <NavDropdown title="Services" id="services-nav-dropdown">
              <NavDropdown.Item as={Link} to="/service1">Service 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service2">Service 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service3">Service 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/other-service">Other Service</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Pages" id="pages-nav-dropdown">
              <NavDropdown.Item as={Link} to="/page1">Page 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/page2">Page 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/page3">Page 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/another-page">Another Page</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blogs" id="blogs-nav-dropdown">
              <NavDropdown.Item as={Link} to="/blog1">Blog 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog2">Blog 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog3">Blog 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/other-blog">Other Blog</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/ContactHo">Contact</Nav.Link>
          </Nav>

          <Form inline="true" className="d-flex align-items-center me-auto">
            {showSearchInput && (
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2 rounded-pill"
                style={{ width: "150px" }}
              />
            )}
            <Button
              variant="link"
              className="p-2"
              onClick={handleSearchClick}
              style={{ textDecoration: "none" }}
            >
              <FaSearch />
            </Button>
            <Button variant="link" className="p-2 ms-2" style={{ textDecoration: "none" }}>
              <FaShoppingCart />
            </Button>
          </Form>

          <Button variant="primary" className="rounded-pill ms-2">
            Get A Quote <FaArrowAltCircleRight />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarcomponent;
