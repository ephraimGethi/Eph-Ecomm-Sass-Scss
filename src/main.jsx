import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css'
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Blog from './Blog/Blog.jsx'
import Shop from './Shop/Shop.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<div>Not found</div>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/shop',
        element:<Shop/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
