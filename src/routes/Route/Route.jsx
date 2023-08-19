import {createBrowserRouter} from 'react-router-dom';
import Main from '../../layout/Main/Main';
import Login from '../../pages/Login/Login';
import Home from '../../pages/Home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Login></Login>,
            },
            {
                path: '/home',
                element: <Home></Home>
            }
        ]
    }
])

export default router;