const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main/Main");
const { default: Home } = require("../../Pages/Home/Home");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            }

        ]

    }


])