import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import ProjectsLayout from "../layout/ProjectsLayout";
import Loading from "../components/Loading";
import ProjectsWithToggle from "../pages/projects";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path: "/projects",
        Component: ProjectsLayout,
        hydrateFallbackElement: <Loading />,
        children: [
            {
                index: true,
                element: <ProjectsWithToggle showAll={true} />
            }
        ]
    }
])