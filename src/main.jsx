import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./utils/i18n.js";
import { HashRouter } from "react-router-dom";

// Clean redirect to hash if direct browser path is entered without hash
if (typeof window !== "undefined" && !window.location.hash) {
  const rawPath = window.location.pathname || "";
  // Strip repository subpath (e.g. /legacy-it) and trailing slash
  const cleanPath = rawPath
    .replace(/^\/legacy-it/, "")
    .replace(/\/+$/, "");

  if (cleanPath && cleanPath !== "") {
    const targetHash = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
    const basePrefix = rawPath.startsWith("/legacy-it") ? "/legacy-it" : "";
    window.location.replace(`${basePrefix}/#${targetHash}${window.location.search}`);
  }
}

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
