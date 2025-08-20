import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/theme.css"; // <- Import the theme

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
