import React from "react";
import { Container } from "reactstrap";
import "./navSelector.styles.css";

const NavSelector: React.FC = () => {
  return (
    <div className="nav-selector">
      <Container className="d-flex">
        <div className="p-3 nav-text-color pointer">Overview</div>
        <div className="p-3 nav-text-color pointer active-tab">Trades</div>
        <div className="p-3 nav-text-color pointer">Disputes</div>
        <div className="p-3 nav-text-color pointer">Your offers</div>
        <div className="p-3 nav-text-color pointer">My team</div>
        <div className="p-3 nav-text-color pointer">Trade history</div>
      </Container>
    </div>
  );
};

export default NavSelector;
