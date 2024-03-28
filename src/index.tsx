import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    children: [{ path: '/home', element: <HomePage /> }],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
