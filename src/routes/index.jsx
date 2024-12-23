import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explore";
import Notifications from "../pages/notifications";
import Notfound from "../pages/not-found";
import MainLayout from "../layout/main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

export default routes;
