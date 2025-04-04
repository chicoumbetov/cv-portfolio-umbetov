import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import App from "./App.tsx";
import i18nRoot from "./i18n/config.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18nRoot}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
