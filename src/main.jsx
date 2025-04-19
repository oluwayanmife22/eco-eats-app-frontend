import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './pages/home/Home.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import ErrorPage from './components/header/ErrorPage.jsx';
import CategoryPage from './pages/category/CategoryPage.jsx';
import Search from './pages/Search.jsx';
import SingleProducts from './pages/products/SingleProducts.jsx';
import Recipe from './pages/products/Recipes.jsx';
import Resources from './resources/Resources.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx'; // ✅ Added import

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/categories/:category',
        element: <CategoryPage />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/recipes',
        element: <Recipe />,
      },
      {
        path: '/resources',
        element: <Resources />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />, // ✅ No error now
      },
      {
        path: '/items/:id',
        element: <SingleProducts />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(`http://localhost:5000/api/items/${params.id}`);
            if (!response.ok) {
              throw new Error('Item not found');
            }
            const data = await response.json();
            return data;
          } catch (error) {
            console.error('Loader failed:', error);
            throw new Response('Item not found', { status: 404 });
          }
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
