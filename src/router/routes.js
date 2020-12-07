//Core
import { lazy } from 'react';

const routes = [
	{
		path: '/',
		label: 'Главная',
		exact: true,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/HomePage' /* webpackChunkName: "home-page" */)),
	},
	{
		path: '/statistics',
		label: 'Статистика',
		exact: true,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/StatisticsPage' /* webpackChunkName: "statistics-page"*/)),
	},
	{
		path: '/register',
		label: 'Register',
		exact: true,
		private: false,
		restricted: true,
		component: lazy(() => import('pages/RegisterPage' /* webpackChunkName: "register-page"*/)),
	},
	{
		path: '/login',
		label: 'Login',
		exact: true,
		private: false,
		restricted: true,
		component: lazy(() => import('pages/LoginPage' /* webpackChunkName: "login-page"*/)),
	},
];

export default routes;
