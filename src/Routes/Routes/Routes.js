import AllCourse from "../../Other/AllCourse/AllCourse";
import Blog from "../../Other/Blog/Blog";
import Checkout from "../../Other/Checkout/Checkout";
import CourseDetailPage from "../../Other/CourseDetailPage/CourseDetailPage";
import Courses from "../../Other/Courses/Courses";
import ErrorPage from "../../Other/ErrorPage/ErrorPage";
import FAQ from "../../Other/FAQ/FAQ";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <AllCourse></AllCourse>,
                loader: () => fetch('http://localhost:5000/courses')

            },

            {
                path: '/course/:id',
                element: <CourseDetailPage></CourseDetailPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {

                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>

            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]

    }


])