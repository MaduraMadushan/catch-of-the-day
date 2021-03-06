import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">{props.tagline}</h3>
    </header>
  );
};

Header.propType = {
  tagline: PropTypes.string.isRequired
};

export default Header;
