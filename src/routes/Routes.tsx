import { RouteObject } from "react-router-dom";
import App from "../App";
import Profile from "../pages/Profile";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/profile", element: <Profile /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
];
