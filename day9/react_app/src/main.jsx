import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DisplayMarks from "./displaymarks.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DisplayMarks />
  </StrictMode>
);
