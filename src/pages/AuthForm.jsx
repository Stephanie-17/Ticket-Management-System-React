// src/components/AuthForm.jsx
import { useState } from "react";
import { useAuth } from "../context/useAuth.js";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
	const { signup, login, user, isAuthenticated, logout } = useAuth();
	const [isSignUp, setIsSignUp] = useState(true);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({});
	const [success, setSuccess] = useState(false);
	const navigate = useNavigate();
	if (isAuthenticated) {
		navigate("/dashboard");
	}
	const generateFakeToken = () =>
		"token_" +
		Math.random().toString(36).substring(2) +
		Date.now().toString(36);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const validate = () => {
		const newErrors = {};
		if (isSignUp && !formData.name.trim()) newErrors.name = "Name required";
		if (!formData.email.trim() || !emailRegex.test(formData.email))
			newErrors.email = "Valid email required";
		if (!formData.password.trim() || formData.password.length < 6)
			newErrors.password = "Password min 6 chars";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;
		try {
			if (isSignUp) {
				const newUser = { ...formData, token: generateFakeToken() };
				signup(newUser);
				navigate("/dashboard");
			} else {
				login(formData.email, formData.password);
				navigate("/dashboard");
			}
			setSuccess(true);
			setTimeout(() => setSuccess(false), 3000);
			setFormData({ name: "", email: "", password: "" });
			setErrors({});
		} catch (err) {
			setErrors({ general: err.message });
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			<header className="mb-8 text-center">
				<h1 className="text-3xl font-bold mb-2">
					{isSignUp ? "Create an Account" : "Welcome Back!"}
				</h1>
				<p className="italic text-(--color-text-light)">
					{isSignUp ? "Sign up to get started!" : "Log in to continue!"}
				</p>
			</header>

			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
			>
				{isSignUp && (
					<div className="mb-5 flex flex-col">
						<label htmlFor="name" className="font-bold mb-1">
							Name:
						</label>
						<input
							type="text"
							name="name"
							id="name"
							value={formData.name}
							onChange={handleChange}
							className="w-full p-2 rounded-md border border-gray-300"
						/>
						{errors.name && (
							<span className="text-red-500 text-sm mt-1">{errors.name}</span>
						)}
					</div>
				)}

				<div className="mb-5 flex flex-col">
					<label htmlFor="email" className="font-bold mb-1">
						Email:
					</label>
					<input
						type="email"
						name="email"
						id="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full p-2 rounded-md border border-gray-300"
					/>
					{errors.email && (
						<span className="text-red-500 text-sm mt-1">{errors.email}</span>
					)}
				</div>

				<div className="mb-5 flex flex-col">
					<label htmlFor="password" className="font-bold mb-1">
						Password:
					</label>
					<input
						type="password"
						name="password"
						id="password"
						value={formData.password}
						onChange={handleChange}
						className="w-full p-2 rounded-md border border-gray-300"
					/>
					{errors.password && (
						<span className="text-red-500 text-sm mt-1">{errors.password}</span>
					)}
				</div>

				<button
					type="submit"
					className="w-full bg-(--color-primary-light) text-white p-2 rounded-md hover:bg-blue-600 transition"
				>
					{isSignUp ? "Sign Up" : "Log In"}
				</button>

				{errors.general && (
					<p className="text-red-500 text-center mt-3">{errors.general}</p>
				)}

				{success && (
					<div className="mt-4 p-3 rounded-md bg-green-100 text-green-700 text-center">
						✅ {isSignUp ? "Account created!" : "Logged in successfully!"}
					</div>
				)}

				<p className="mt-4 text-center text-(--colot-text-light)">
					{isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
					<button
						type="button"
						onClick={() => setIsSignUp(!isSignUp)}
						className="text-(--color-primary-light) font-bold hover:text-blue-700 transition"
					>
						{isSignUp ? "Log In" : "Sign Up"}
					</button>
				</p>

				{isAuthenticated && (
					<div className="mt-6 text-center text-green-700">
						Logged in as <strong>{user?.name || user?.email}</strong>
						<button
							onClick={logout}
							className="ml-2 text-red-600 underline text-sm"
						>
							Logout
						</button>
					</div>
				)}
			</form>
		</div>
	);
}
