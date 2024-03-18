import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Home, Product, Products } from './pages'
import { Navbar, Footer } from './components'
import './app.scss'

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/collections/:id',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      // {
      //   path: '/about',
      //   element: <h1>About Us!</h1>,
      //   children: [
      //     {
      //       path: '/services',
      //       element: <h1>Services</h1>,
      //     },
      //     {
      //       path: '/account',
      //       element: <h1>Account</h1>,
      //     },
      //     {
      //       path: '/stores',
      //       element: <h1>Stores</h1>,
      //     },
      //     {
      //       path: '/faqs',
      //       element: <h1>FAQs</h1>,
      //     },
      //   ],
      // },
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
