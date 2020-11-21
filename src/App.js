import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <Pet name={"One"} animal={"dog"} breed={"havanees"} />
      <Pet name={"One"} animal={"cat"} breed={"mia"} />
      <Pet name={"One"} animal={"cow"} breed={"hanees"} />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
