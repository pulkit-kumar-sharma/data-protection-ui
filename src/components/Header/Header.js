import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import { Container } from "react-bootstrap";

const Header = () => (
  <Container fluid className="text-center bg-dark p-2 w-100">
    <h1 className="text-light">Data Protection</h1>
    <h4 className="text-light">Protect Your Data</h4>
  </Container>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
