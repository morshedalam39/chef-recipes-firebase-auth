import { Await, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../pages/Blog/Blog";
import Chef from "../pages/Chef/Chef";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import RecipeInfo from "../pages/RecipeInfo/RecipeInfo";
import PrivateRoute from "./PrivateRoute";
import Error from "../ErrorPage/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<Error></Error>,
        
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

            },
            {
                path: '/chefDatils/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: async ({params}) => {
                    let chef; 
                    let recipe;
                    await fetch(`https://chef-recipe-morshedalam39.vercel.app/chef/${params.id}`)
                    .then(res =>res.json())
                    .then(result=>chef=result)
                    await fetch(`https://chef-recipe-morshedalam39.vercel.app/details/${params.id}`)
                    .then(res =>res.json())
                    .then(result=>recipe=result)
                    return [chef,recipe]
                    
                }
            },
            
        ],
       

    },
]

)

export default router;