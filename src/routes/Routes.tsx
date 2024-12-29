import { RouteObject } from "react-router-dom";
import App from "../App";
import Profile from "../pages/Profile";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];
