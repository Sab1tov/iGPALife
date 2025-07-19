import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementDark } from "./screens/ElementDark";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ElementDark />
  </StrictMode>,
);
