import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HeroPage } from './pages/HomePage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import { SignupPage } from './pages/SignupPage.jsx'
import { DashboardPage } from './pages/DashboardPage.jsx';
import { ForecastPage } from './pages/ForecastPage.jsx';
import { MapsPage } from './pages/MapsPage.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';

import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HeroPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/signup',
        element: <SignupPage />
      },
      {
        path: '/dashboard',
        element: <DashboardPage />
      },
      {
        path: '/forecast',
        element: <ForecastPage />
      },
      {
        path: '/maps',
        element: <MapsPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);