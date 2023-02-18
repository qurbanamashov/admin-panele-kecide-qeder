import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import HotelDetail from "../Pages/HotelDetail/HotelDetail";
import List from "../Pages/List/List";
import Login from "../Pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/detail/:id",
    element: <HotelDetail/>,
  },
  {
    path:"/login",
    element:<Login/>
  }
]);
export default router