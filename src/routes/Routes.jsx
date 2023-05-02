import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../pages/Blog/Blog";
import Chef from "../pages/Chef/Chef";
import ChefDetails from "../pages/ChefDetails/ChefDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/chef',
                element: <Chef></Chef>,
                // loader: () => fetch(`http://localhost:5000/chef`)
            },
            {
                path: '/chefDatils',
                element: <ChefDetails></ChefDetails>,
                // loader: () => fetch(`http://localhost:5000/chef`)
            }
        ]
    }
])

export default router;