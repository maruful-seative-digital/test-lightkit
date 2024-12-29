import { RouteObject } from "react-router-dom";
import App from "../App";
import Profile from "../pages/Profile";
import MainLayout from "../layouts/MainLayout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
];
