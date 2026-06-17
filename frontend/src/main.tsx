import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext.tsx"; // <--- IMPORT THIS

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* MUST WRAP <APP /> */}
    <ThemeProvider defaultTheme="system" storageKey="gestionly-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
