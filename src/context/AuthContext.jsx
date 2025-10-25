// src/context/AuthContext.js
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("ticketapp_user")) || null
	);
	const [token, setToken] = useState(
		localStorage.getItem("ticketapp_session") || null
	);
	const navigate = useNavigate();

	const getAllUsers = () =>
		JSON.parse(localStorage.getItem("ticketapp_users")) || [];
	const saveAllUsers = (users) =>
		localStorage.setItem("ticketapp_users", JSON.stringify(users));

	const signup = (newUser) => {
		const users = getAllUsers();
		const existing = users.find((u) => u.email === newUser.email);
		if (existing) throw new Error("Email already exists. Please log in.");
		users.push(newUser);
		saveAllUsers(users);
		setUser(newUser);
		setToken(newUser.token);
		localStorage.setItem("ticketapp_user", JSON.stringify(newUser));
		localStorage.setItem("ticketapp_session", newUser.token);
	};

	const login = (email, password) => {
		const users = getAllUsers();
		const foundUser = users.find(
			(u) => u.email === email && u.password === password
		);
		if (!foundUser) throw new Error("Invalid email or password.");
		setUser(foundUser);
		setToken(foundUser.token);
		localStorage.setItem("ticketapp_user", JSON.stringify(foundUser));
		localStorage.setItem("ticketapp_session", foundUser.token);
	};

	const logout = () => {
		setUser(null);
		setToken(null);
		localStorage.removeItem("ticketapp_user");
		localStorage.removeItem("ticketapp_session");
		navigate("/sign-up");
	};

	const isAuthenticated = !!token;

	return (
		<AuthContext.Provider
			value={{ user, token, isAuthenticated, signup, login, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
