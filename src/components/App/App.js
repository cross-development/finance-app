//Core
import React, { Suspense, useEffect } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
//Components
import AppBar from '../AppBar';
import SideBar from '../SideBar';
import { Layout, Loader } from '../Commons';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { transactionsOperations } from 'redux/transactions';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

const App = () => {
	const { user } = useSelector(state => state.auth);
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

	return (
		<Router>
			{user && <AppBar />}

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
					</Switch>
				</Suspense>
			</Layout>
		</Router>
	);
};

export default App;
