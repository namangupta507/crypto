import { createBrowserRouter } from "react-router-dom";
import Login from "./screen/Login";
import Dashboard from "./screen/Dashboard";
import Layout from "./components/Layout";
import ProtectedRoute from './api/protectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // optional
  },
  {
    path: "/dashboard",
    element:<Layout/>,
    children: [
      {
        index: true,           
        element: <ProtectedRoute element={<Dashboard/>}/>
      },
    ],
  },
]);

export default router;
