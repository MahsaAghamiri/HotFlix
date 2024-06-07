import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from '../../Pages/Home';

const routs = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <h1>Not Found</h1>
    }
])

export default function Router(){
    return(<RouterProvider router={routs} />)
}

