import React from "react";
import PropTypes from "prop-types";

import Navigation from "./Navbar";
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Navigation />

    <div className='layout'>
      <main>{ children }</main>
    </div>

  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
