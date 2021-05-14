import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
} from "react-bootstrap";


const Header = () => {
 
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">On Sale Products</Nav.Link>
        </Nav>
        <Navbar.Brand href="#home">Logo here</Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Find Products"
            className="mr-sm-2"
          />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Navbar.Text>
          <a href="">
            <i class="fas fa-shopping-cart text-success"></i>
          </a>
        </Navbar.Text>

        <Button>Login/Sign Up</Button>
      </Navbar>
    </>
  );
};

export default Header;
