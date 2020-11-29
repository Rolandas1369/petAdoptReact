import React, { Component, createContext } from "react";

// second params is update function
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
