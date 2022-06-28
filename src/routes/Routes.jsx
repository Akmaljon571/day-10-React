import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from "@ant-design/icons";


let Home = lazy(() => import("../page/Home/home"));
let About = lazy(() => import("../page/About/about"));
let Contact = lazy(() => import("../page/Contact/contact"));
let Error = lazy(() => import("../page/Error/Error"));

export const NewRoutes = [
  {
    path: "/",
    element: <Home />,
    key: "/",
    icon: <UserOutlined />,
    label: "Home",
  },
  {
    path: "/about",
    element: <About />,
    key: "/about",
    icon: <UploadOutlined />,
    label: "About",
  },
  {
    path: "/contact",
    element: <Contact />,
    key: "/contact",
    icon: <VideoCameraOutlined />,
    label: "Contact",
  },
  {
    path: "*",
    element: <Error />,
    key: "*",
  },
];
export function Routes() {
  let react = useRoutes(NewRoutes);

  return react;
}
