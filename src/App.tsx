import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "github-markdown-css/github-markdown-dark.css";

// local import
import Home from "./pages/Home";
import ReactRouterNote from "./pages/ReactRouterNote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/react-router",
    element: <ReactRouterNote />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
