import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import PaymentPage from "../components/Plan";
import Principal from "../components/Principal";
import LoginPage from "../components/LoginPage";
import LogPage from "../components/LogPage";
import NotFoundPage from "../components/NotFoundPage";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Principal />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/log',
    element: <LogPage />,
  },
  {
    path: '/plan/starter',
    element: (
      <ProtectedRoute>
        <PaymentPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />
  },
]);
