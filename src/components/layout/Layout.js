import React from "react";
import { Jumbotron } from "react-bootstrap";

import Header from "./partials/Header";
import Footer from "./partials/Footer";
import "./layout.style.css";
const Layout = ({ children }) => {
  return (
    <div classname="layout-style">
      <Header />
      <Jumbotron>{children}</Jumbotron>
      <Footer />
    </div>
  );
};

export default Layout;
