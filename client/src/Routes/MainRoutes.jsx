import { useRoutes } from "react-router-dom";
import { Home } from "../HomePage/Home";
import { lazy } from "react";
import Error from "../Error/Error";
import Connect from "../ConnectPage/Connect";


//===========|| lazy loading ||===========//
const Project = lazy(() => import('../ProjectPage/Project'));
const Stack = lazy(() => import('../StackPage/Stack'));


//================|| ROUTING RENDER ||===================//
export default function AppRoutes() {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/project",
            element: <Project />,
        },
        {
            path: "/stack",
            element: <Stack />,
        },
        {
            path: "/connect",
            element: <Connect />,
        },
        {
            path: "*",
            element: <Error />,
        }
    ]);
}
