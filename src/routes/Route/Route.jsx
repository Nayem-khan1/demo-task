import {createBrowserRouter} from 'react-router-dom';
import Main from '../../layout/Main/Main';
import Login from '../../pages/Login/Login';
import Home from '../../pages/Home/Home';
import Register from '../../pages/Register/Register';
import AddCourse from '../../pages/AddCourse/AddCourse';

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
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/add-course',
                element: <AddCourse></AddCourse>
            }
        ]
    }
])

export default router;