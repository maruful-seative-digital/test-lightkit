import { RouteObject } from "react-router-dom";
import App from "../App";
import Profile from "../pages/Profile";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import EmailVerification from "../pages/EmailVerification";
import ForgotPassword from "../pages/ForgotPassword";
import Subscription from "../pages/Subscription";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/profile", element: <Profile /> },
      { path: "/login", element: <Login /> },
      { path: "/login/forgot-password", element: <ForgotPassword /> },
      { path: "/signup", element: <Signup /> },
      { path: "/signup/email-verification", element: <EmailVerification /> },
      { path: "/subscription", element: <Subscription /> },
    ],
  },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
];
