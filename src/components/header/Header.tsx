import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import "./header.styles.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (): void => setIsOpen(!isOpen);

  return (
    <Navbar dark expand="md" className="header-bg">
      <NavbarBrand href="/">PAXFUL</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Buy bitcoins</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Sell bitcoins</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Wallet</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Support</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Your account</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
