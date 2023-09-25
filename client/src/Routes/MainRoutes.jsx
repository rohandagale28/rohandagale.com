import { useRoutes } from "react-router-dom";
import { Home } from "../HomePage/Home";
import { lazy } from "react";
import Error from "../Error/Error";


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
            path: "*",
            element: <Error />,
        }
    ]);
}
