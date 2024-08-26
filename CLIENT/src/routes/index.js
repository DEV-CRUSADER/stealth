import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";
import AuthLayout from "../layouts/auth";

//theme
import { useTheme } from "@mui/material";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {

  const theme = useTheme();

  return useRoutes([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "reset-password", element: <ResetPasswordPage /> },
        { path: "new-password", element: <NewPasswordPage /> },
        { path: "verify", element: <VerifyPage /> },

        { path: "404", element: <Page404 theme={theme} /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "profile", element: <ProfileApp /> },
        { path: "app", element: <GeneralApp /> },
        { path: "group", element: <GroupApp /> },
        { path: "call", element: <CallApp /> },
        { path: "settings", element: <SettigsApp /> },

        { path: "404", element: <Page404 theme={theme} /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const ProfileApp = Loadable(lazy(() => import("../pages/dashboard/ProfileApp")));
const GeneralApp = Loadable(lazy(() => import("../pages/dashboard/GeneralApp")));
const SettigsApp = Loadable(lazy(() => import("../pages/dashboard/SettigsApp")));
const GroupApp = Loadable(lazy(() => import("../pages/dashboard/GroupApp")));
const CallApp = Loadable(lazy(() => import("../pages/dashboard/CallApp")));

const LoginPage = Loadable(lazy(() => import("../pages/auth/Login")));
const VerifyPage = Loadable(lazy(() => import("../pages/auth/Verify")));
const RegisterPage = Loadable(lazy(() => import("../pages/auth/Register")));
const ResetPasswordPage = Loadable(lazy(() => import("../pages/auth/ResetPassword")));
const NewPasswordPage = Loadable(lazy(() => import("../pages/auth/NewPassword")));

const Page404 = Loadable(lazy(() => import("../pages/Page404")));
