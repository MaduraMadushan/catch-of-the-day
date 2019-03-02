import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <header>
      <h1>Catch Of The Day</h1>
      <h3>{props.tagline}</h3>
    </header>
  );
};

Header.propType = {
  tagline: PropTypes.string.isRequired
};

export default Header;
