import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from '../../Pages/Home';
import MovieDetails from '../../Pages/MovieDetails';
import NotFound from '../ErrorHandeling/NotFound';
import Search from '../../Pages/Search';

const routs = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/movie/:id',
        element: <MovieDetails />
    },
    {
        path: '/search',
        element: <Search />
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default function Router(){
    return(<RouterProvider router={routs} />)
}

