import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from '../../Pages/Home';
import MovieDetails from '../../Pages/MovieDetails';
import NotFound from '../ErrorHandeling/NotFound';
import Search from '../../Pages/Search';
import Genres from '../../Pages/Genres';
import AllMovies from '../../Pages/AllMovies';
import AllGenres from '../../Pages/AllGenres';
import AboutUs from '../../Pages/AboutUs';
import ContactUs from '../../Pages/ContactUs';

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
        path: '/genres',
        element: <AllGenres />
    },
    {
        path: '/genre/:id',
        element: <Genres />
    },
    {
        path: '/movies',
        element: <AllMovies />
    },
    {
        path: '/aboutus',
        element: <AboutUs />
    },
    {
        path: '/contacts',
        element: <ContactUs />
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default function Router(){
    return(<RouterProvider router={routs} />)
}

