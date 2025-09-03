import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../Home";
import SaibaMais from "../pages/SaibaMais";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace /> // redireciona para /home
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/saiba-mais",
        element: <SaibaMais />
      }
    ]
  }
]);

export default router;
