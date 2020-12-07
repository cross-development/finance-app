//Core
import React, { Suspense, useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
//Components
import AppBar from '../AppBar';
import SideBar from '../SideBar';
import { Layout, Loader } from '../Commons';
import CurrencyPage from 'pages/CurrencyPage';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { transactionsOperations } from 'redux/transactions';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

const App = () => {
	const { user, loading } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authOperations.getCurrentUser());
	}, [dispatch]);

	useEffect(() => {
		if (user) {
			dispatch(transactionsOperations.getTransactions());
			dispatch(transactionsOperations.getTransactionCategories());
		}
	}, [dispatch, user]);
	// {window.screen.width < 768 && <Route component={<CurrencyPage />} />}
	return (
		<Router>
			{user && <AppBar />}

			{loading && <Loader onLoad={loading} />}

			<Layout>
				{user && <SideBar />}

				<Suspense fallback={<Loader onLoad={true} />}>
					<Switch>
						{routes.map(route =>
							route.private ? (
								<PrivateRoute key={route.path} {...route} />
							) : (
								<PublicRoute key={route.path} {...route} />
							),
						)}

						{window.screen.width < 768 && <Route component={<CurrencyPage />} />}
					</Switch>
				</Suspense>
			</Layout>
		</Router>
	);
};

export default App;
