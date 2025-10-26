import React, { useState } from "react";
import { useTicket } from "../context/useTicket";
import { useAuth } from "../context/useAuth";
import CreateTask from "../components/CreateTask";
import { Link } from "react-router-dom";

const TicketManagement = () => {
	const [editId, setEditId] = useState(null);
	const [editTitle, setEditTitle] = useState("");
	const [editDescription, setEditDescription] = useState("");
	const [editStatus, setEditStatus] = useState("");
	const { tickets, updateTicket, deleteTicket } = useTicket();
	const [createModal, setCreateModal] = useState(false);
	const { logout, user } = useAuth();

	function startEdit(ticket) {
		setEditId(ticket.id);
		setEditTitle(ticket.title);
		setEditDescription(ticket.description);
		setEditStatus(ticket.status);
	}

	function saveEdit() {
		updateTicket(editId, {
			title: editTitle,
			description: editDescription,
			status: editStatus,
		});
		setEditId(null);
		setEditTitle("");
		setEditDescription("");
		setEditStatus("");
	}
	return (
		<main className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-8 space-y-(--space-lg) mt-(--space-lg)">
			<header className="flex mt-4 justify-between items-center mb-8 relative">
				<h1 className="sm:text-4xl text-2xl font-extrabold text-gray-900 mb-4 sm:mb-0">
					{user.name}'s Tickets
				</h1>
				<div className="flex items-center gap-2 sm:gap-6">
					<p
						className="text-(--color-text-light) cursor-pointer text-sm sm:text-base w-[60px] sm:w-fit hover:text-(--color-primary-light) transition-colors"
						onClick={() => setCreateModal(true)}
					>
						+ Create New Task
					</p>
					<button
						className="py-(--space-sm)  w-[90px] bg-red-600 text-(--color-text-secondary) font-bold cursor-pointer rounded-md "
						onClick={logout}
					>
						Log Out
					</button>
				</div>
				<Link className="absolute -top-8" to="/dashboard">
					<p className="hover:text-black transition-colors  text-(--color-text-light) text-sm">
						&larr; Back to Dashboard
					</p>
				</Link>
			</header>

			<section className="flex flex-col gap-(--space-md)">
				{tickets.length === 0 ? (
					<p className="text-(--color-text-light) italic">
						No tickets yet — create your first one!
					</p>
				) : (
					tickets.map((ticket) =>
						editId === ticket.id ? (
							<div key={ticket.id} className="w-[60%] border flex flex-col p-8 rounded-md gap-(--space-md) shadow">
								<div className="flex items-start flex-col gap-2">
									<label className="font-semibold text-xl" htmlFor="title">
										Title:
									</label>
									<input
										className="border-2 rounded-md p-2 w-[90%] "
										type="text"
										value={editTitle}
										onChange={(e) => setEditTitle(e.target.value)}
									/>
								</div>

								<div className="flex items-start flex-col gap-2">
									<label
										className="font-semibold text-xl"
										htmlFor="description"
									>
										Description:
									</label>
									<input
										className="border-2 rounded-md p-2 w-[90%]"
										type="text"
										value={editDescription}
										onChange={(e) => setEditDescription(e.target.value)}
									/>
								</div>

								<div className="flex items-start flex-col gap-2">
									<label className="font-semibold text-xl" htmlFor="status">
										Status:
									</label>
									<select
										className="border-2 rounded-md p-2 w-[90%]"
										name="status"
										id="status"
										value={editStatus}
										onChange={(e) => setEditStatus(e.target.value)}
									>
										<option value="open">Open</option>
										<option value="in_progress">in_progress</option>
										<option value="closed">Closed</option>
									</select>
								</div>

								<button
									className="bg-green-500 text-white py-2 rounded-md w-[30%] hover:bg-green-600 cursor-pointer"
									onClick={saveEdit}
								>
									Save
								</button>
							</div>
						) : (
							<div
								className={`flex min-[400px]:w-full flex-col sm:flex-row gap-6 sm:justify-between border-l-10 ${
									ticket.status === "open"
										? "border-l-green-600"
										: ticket.status === "in_progress"
										? "border-l-amber-600"
										: "border-l-gray-600"
								} rounded-md shadow-lg p-4`}
							>
								<div className=" ">
									<h3 className="text-xl font-semibold mb-4">{ticket.title}</h3>
									<p className="text-(--color-text-light)">
										{ticket.description}
									</p>
								</div>
								<div className="flex items-center gap-(--space-sm)">
									<span
										className={`p-2 font-semibold rounded-lg ${
											ticket.status === "open"
												? "bg-green-200 text-green-700"
												: ticket.status === "in_progress"
												? "bg-amber-200 text-amber-700"
												: "bg-gray-200 text-gray-700"
										}`}
									>
										{ticket.status}
									</span>
									<button
										type="button"
										className="bg-(--color-primary-light) py-(--space-sm) px-(--space-lg) text-white rounded-md cursor-pointer"
										onClick={() => startEdit(ticket)}
									>
										Edit
									</button>
									<button
										type="button"
										className="bg-red-600 py-(--space-sm) px-(--space-lg) text-white rounded-md cursor-pointer"
										onClick={() => deleteTicket(ticket.id)}
									>
										Delete
									</button>
								</div>
							</div>
						)
					)
				)}
			</section>
			{createModal && <CreateTask onClose={() => setCreateModal(false)} />}
		</main>
	);
};

export default TicketManagement;
