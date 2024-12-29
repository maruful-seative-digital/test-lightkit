import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.tsx";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes/Routes.tsx";

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
