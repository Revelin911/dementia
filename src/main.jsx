//import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import Services from './pages/Services.jsx';
// import TMS from './pages/Tms.jsx';
// import Ketamine from './pages/Ketamine.jsx';
// import Psilocybin from './pages/Psilocybin.jsx'
// import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx'
//import Header from './components/Header.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: '/about',
      //   element: <About />,
      // },
      // {
      //   path: '/services',
      //   element: <Services />,
      // },
      // {
      //   path: '/tms',
      //   element: <TMS />,
      // },
      // {
      //   path: '/ketamine',
      //   element: <Ketamine />,
      // },
      // {
      //   path: '/psilocybin',
      //   element: <Psilocybin />,
      // },
      // {
      //   path: '/contact',
      //   element: <Contact />,
      // },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
