import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./App.jsx";

import "./i18n";
import { Suspense } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  </StrictMode>
);
