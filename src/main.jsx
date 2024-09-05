import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ListaTareas } from "./components/ListaTareas";
import { Scramble } from "./components/Scramble";
import { CalculatorApp } from "./components/CalculatorApp";
import { UserComponent } from "./components/UserComponent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Scramble />
    <hr />
    <CalculatorApp />
    <hr />
    <ListaTareas />
    <hr />
    <UserComponent />
  </StrictMode>
);
