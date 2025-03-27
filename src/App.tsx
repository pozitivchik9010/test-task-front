import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.scss';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import OrderDetails from './pages/Order';
import Orders from './pages/Orders';
import Error from './pages/Error';

const orders = [
	{ transactionId: "15325", date: "12.06.2024", status: "Success", name: "Ernardd", gameId: "1523523623", amount: "153,26" },
	{ transactionId: "515327", date: "12.06.2024", status: "Success", name: "Ernardd", gameId: "1523523623", amount: "153,26" },
	{ transactionId: "615325", date: "12.06.2024", status: "Success", name: "Ernardd", gameId: "1523523623", amount: "153,26" },
	{ transactionId: "415325", date: "12.06.2024", status: "Success", name: "Ernardd", gameId: "1523523623", amount: "153,26" },
	{ transactionId: "315325", date: "12.06.2024", status: "Success", name: "Ernardd", gameId: "1523523623", amount: "153,26" },
];

const pageVariants = {
	initial: { opacity: 0, y: 0 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

function AnimatedRoutes() {
	const location = useLocation(); // Тепер useLocation викликається всередині BrowserRouter

	return (
		<AnimatePresence mode="wait">
			<motion.div className='App' key={location.pathname} initial="initial" animate="animate" exit="exit" variants={pageVariants}>
				<Routes location={location}>
					<Route path='/' element={<Home />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route path='/orders' element={<Orders orders={orders} />} />
					<Route path="/order/:id" element={<OrderDetails orders={orders} />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</motion.div>
		</AnimatePresence>
	);
}

function App() {
	return (
		<BrowserRouter>
			<AnimatedRoutes /> {/* useLocation тепер всередині Router */}
		</BrowserRouter>
	);
}

export default App;