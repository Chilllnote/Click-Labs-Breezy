import React, { useState, useEffect } from 'react';
import './App.css';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import BlogLayout from './layouts/BlogLayout';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/Dynamic pages/BlogPost';

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://local-breezy.local/graphql" }),
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // Everything inside 'children' shows up in the MainLayout <Outlet />
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />, // You can reuse components or point to new ones
      },
      {
        path: "pricing",
        element: <PricingPage />, // You can reuse components or point to new ones
      },
    ],
  },
  {
    path: "/blog",
    element: <BlogLayout />,
    children: [
      {
        index: true,
        element: <BlogPage />, // This could be a BlogList component in a real app
      },
    ],
  },
  {
    path: "/blog/:slug",
    element: <BlogPost />, // This would be your BlogPost component that fetches data based on slug
  }
]);

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
