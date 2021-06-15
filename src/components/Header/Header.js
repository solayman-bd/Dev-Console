import React from "react";
import "./Header.css";
import brandIcon from "../../img/brand Icon.PNG";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className="bg-header">
        <Navbar.Brand href="#home">
          <img src={brandIcon} className="brand-img" alt="" />
        </Navbar.Brand>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="&#x2265; Developer"
            className="border-0 bg-transparent"
            aria-label="Search"
          />
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="text-white bg-header">
            Sign Up
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
