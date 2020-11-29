import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  // can be {one: 2}
  // as in hooks [color, setColor]
  const themeHook = useState("peru");
  return (
    // dark blue is passed to button
    // theme hooks becomes global state
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt me</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(React.createElement(App), document.getElementById("root"));
