import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layouts/Main/Main"
import Products from "../../Pages/Products/Products/Products"
import Login from "../../Pages/Login/Login"
import Signup from "../../Shared/Signup/Signup"
import CartPage from "../../Pages/CartPage/CartPage"


export const router = createBrowserRouter([
        {
            path: "/",
            element: <Main/>,
            children: [
                {
                    path: "/",
                    element: <Products/>
                },{
                    path: "/login",
                    element: <Login/>
                }
                ,{
                    path: "/signup",
                    element: <Signup/>
                },{
                    path:'/cart',
                    element: <CartPage/>
                }
            ]
        }
])

