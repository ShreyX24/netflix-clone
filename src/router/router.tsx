import { createBrowserRouter, RouteObject } from "react-router-dom";
import { ErrorPage } from "../pages/error-page";
import { Home } from "../pages/home";
import { VideoPlayer } from "../components/VideoPlayer/video-player";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/video/:id",
    element: <VideoPlayer />,
    errorElement: <ErrorPage />,
  },
];

export const router = createBrowserRouter(routes);
