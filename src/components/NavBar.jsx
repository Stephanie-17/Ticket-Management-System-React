import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
const NavBar = () => {
	const { isAuthenticated, logout } = useAuth();
	return (
		<nav className="flex justify-between items-center p-3 lg:p-4 mb-4">
			<Link to="/">
				<h2 className="font-bold text-3xl">FlowDesk</h2>
			</Link>
			{isAuthenticated ? (
				<button onClick={logout} className="bg-red-600 py-(--space-sm) px-(--space-md) rounded-md font-semibold text-(--color-text-secondary) cursor-pointer ">
					Log Out
				</button>
			) : (
				<Link to="/sign-up">
					<button className="bg-(--color-primary-light) py-(--space-sm) px-(--space-md) rounded-md font-semibold text-(--color-text-secondary) cursor-pointer ">
						Sign Up
					</button>
				</Link>
			)}
		</nav>
	);
};

export default NavBar;
