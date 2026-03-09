import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PlantContextProvider from "./context/PlantContext.jsx"

createRoot(document.getElementById("root")).render(
  <PlantContextProvider>
    <App />
  </PlantContextProvider>
);
