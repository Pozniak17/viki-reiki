import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize";
import "./index.css";
import App from "./App.jsx";

import "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback="...is loading">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
