import  Browser  from "./Browser";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";

const Body = () => {
    
    const appRouter = createBrowserRouter([
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/browser',
            element: <Browser />,
        },
    ]);

    return (
        <div>
            {/* <RouterProvider router={appRouter} /> */}
            <Login/>
        </div>
    )
}
export default Body;