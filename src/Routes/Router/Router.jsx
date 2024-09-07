import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layouts/Main/Main"
import Products from "../../Pages/Products/Products/Products"


export const router = createBrowserRouter([
        {
            path: "/",
            element: <Main/>,
            children: [
                {
                    path: "/",
                    element: <Products/>
                }
            ]
        }
])

