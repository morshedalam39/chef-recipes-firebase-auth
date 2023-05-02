import { Await, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../pages/Blog/Blog";
import Chef from "../pages/Chef/Chef";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import RecipeInfo from "../pages/RecipeInfo/RecipeInfo";

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
                path: '/chefDatils/:id',
                element: <ChefDetails></ChefDetails>,
                loader: async ({params}) => {
                    let chef; 
                    let recipe;
                    await fetch(`http://localhost:5000/chef/${params.id}`)
                    .then(res =>res.json())
                    .then(result=>chef=result)
                    await fetch(`http://localhost:5000/details/${params.id}`)
                    .then(res =>res.json())
                    .then(result=>recipe=result)
                    return [chef,recipe]
                    
                }
            },
//             {
//                 path: '/recipeInfo/:id',
//                 element:<RecipeInfo></RecipeInfo>,
//  loader: ({params}) =>fetch(`http://localhost:5000/details/2`)
//             }
        ]
    }
])

export default router;