import React from "react";
import { useTicket } from "../context/useTicket";
import { useAuth } from "../context/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
	const { tickets } = useTicket();
	const { user } = useAuth();
	return (
		<main className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-(--space-lg) mt-(--space-lg)">
			<h1 className="text-4xl font-extrabold text-gray-900 mb-4 sm:mb-0">
				Welcome, {user.name}
			</h1>
			<p className="text-lg text-gray-600 mt-3">
				Here you can manage your tickets, view analytics, and make adjustments
			</p>

			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				<li className="bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105">
					<h2 className="text-xl font-semibold text-blue-800 ">
						Total Tickets
					</h2>
					<p className="text-shadow-gray-700 mt-2 text-xl">{tickets.length}</p>
				</li>

				<li className="bg-green-100 hover:bg-green-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105">
					<h2 className="text-xl font-semibold text-green-800 ">
						Total Open Tickets
					</h2>
					<p className="text-shadow-gray-700 mt-2 text-xl">
						{tickets.filter((t) => t.status === "open").length}
					</p>
				</li>

				<li className="bg-amber-100 hover:bg-amber-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105">
					<h2 className="text-xl font-semibold text-amber-800 ">
						Total Tickets In_Progress
					</h2>
					<p className="text-shadow-gray-700 mt-2 text-xl">
						{tickets.filter((t) => t.status === "in_progress").length}
					</p>
				</li>
				<li className="bg-gray-100 hover:bg-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105">
					<h2 className="text-xl font-semibold text-gray-800 ">
						Total Closed Tickets
					</h2>
					<p className="text-shadow-gray-700 mt-2 text-xl">
						{tickets.filter((t) => t.status === "closed").length}
					</p>
				</li>
			</ul>
			<Link to="/tickets">
				<button className="bg-(--color-primary-light) text-white px-(--space-xl) py-(--space-sm) rounded-md font-semibold cursor-pointer hover:bg-(--color-primary) transition-colors">
					Manage Tickets
				</button>
			</Link>
		</main>
	);
};

export default Dashboard;
