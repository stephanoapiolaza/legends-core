import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Logo from "../assets/logo-white.svg";
import React from "react";

export const Header = () => (
  <Navbar className="bg-dark">
    <Navbar.Brand className="ms-3 container-fluid">
      <Image src={Logo} />
    </Navbar.Brand>
  </Navbar>
);
