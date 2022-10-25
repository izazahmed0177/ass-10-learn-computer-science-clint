import Blog from "../../Other/Blog/Blog";
import Courses from "../../Other/Courses/Courses";
import ErrorPage from "../../Other/ErrorPage/ErrorPage";
import FAQ from "../../Other/FAQ/FAQ";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main/Main");
const { default: Home } = require("../../Pages/Home/Home");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>

            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            }

        ]

    }


])