import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import Layout from "../Layout";
import { lazy } from "react";

// const Detailed = lazy(() => import(/* webpackChunkName: "detailed" */ '../pages/Detailed'));

const Home = lazy(() => import('../pages/Home'));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorBoundary children={<h2>404</h2>} />,
		children: [
			{ path: 'home', element: <Home /> },
		],
	},
	{
		path: '/about-restaurant',
		element: <h4>about-restaurant</h4>,
		errorElement: <ErrorBoundary children={<h2>404</h2>} />
	},
	{
		path: '/about-us',
		element: <h4>about-us</h4>,
		errorElement: <ErrorBoundary children={<h2>404</h2>} />
	},
]);