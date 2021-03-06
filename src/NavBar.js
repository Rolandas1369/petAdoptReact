import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/react";

const NavBar = () => {
  return (
    <header
      css={css`
        background-color: #333;
        padding: 15px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span aria-label="logo" role="img">
        🐑
      </span>
    </header>
  );
};

export default NavBar;
