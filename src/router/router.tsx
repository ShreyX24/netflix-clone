import { createBrowserRouter, RouteObject } from "react-router-dom";
import { ErrorPage } from "../pages/error-page";
import { Home } from "../pages/home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
];

export const router = createBrowserRouter(routes);
