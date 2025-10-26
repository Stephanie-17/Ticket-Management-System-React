import "./App.css";
import {  Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import AuthForm from "./pages/AuthForm";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/useAuth";
import TicketManagement from "./pages/TicketManagement";
import Footer from "./components/Footer";
function App() {
	const { isAuthenticated } = useAuth();
	const location = useLocation();
	const showNavBar =
		location.pathname !== "/dashboard" || location.pathname !== "/tickets";

	return (
		<>
			{showNavBar && <NavBar />}

			<Routes>
				<Route index element={<LandingPage />} />
				<Route path="/sign-up" element={<AuthForm />} />
				<Route
					path="/dashboard"
					element={isAuthenticated ? <Dashboard /> : <AuthForm />}
				/>
				<Route
					path="/tickets"
					element={isAuthenticated ? <TicketManagement /> : <AuthForm />}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
