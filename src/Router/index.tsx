import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultTemplate } from "../pages/DefaultTemplate";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import NotFound from "../pages/NotFound";
import Movie from "../pages/Movie";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultTemplate />,

    children: [
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/whatever",
        element: <NotFound />,
      },
      {
        path: "/movies/123",
        element: <Movie />,
      },
      {
        path: "/movies/123/whatever",
        element: <NotFound />,
      },
    ],
  },
]);
export default function AppRouter() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
