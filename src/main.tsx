import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

// local import
import "./index.css";
import App from "./App.tsx";
import ReactRouterNote from "./pages/ReactRouterNote";
import NotFoundPage from "./pages/NotFoundPage.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/react-router",
    element: <ReactRouterNote />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
