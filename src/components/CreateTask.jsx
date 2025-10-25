import React, { useState } from "react";
import { useTicket } from "../context/useTicket";

const CreateTask = ({ onClose }) => {
	const [newTitle, setNewTitle] = useState("");
	const [newDescription, setNewDescription] = useState("");
	const { addTicket } = useTicket();
	function handleSubmit() {
		if (!newTitle.trim() || !newDescription.trim()) return;
		const newTicket = {
			id: Date.now(),
			title: newTitle,
			description: newDescription,
			status: "open",
		};
		addTicket(newTicket);
		onClose();
	}
	return (
		<aside className=" flex justify-center items-center z-50 w-full bg-black/70 top-0 bottom-0 right-0 fixed inset-0 ">
			<div className="bg-white w-full max-w-[500px] p-8 rounded-md">
				<h3 className="font-semibold text-4xl  text-center mb-8">
					Add A Ticket
				</h3>
				<form className="border-2 rounded-md p-5" onSubmit={handleSubmit}>
					<div className="flex items-start flex-col gap-2">
						<label htmlFor="title" className="font-semibold text-xl">
							Title:
						</label>
						<input
							className="border-2 rounded-md p-2 w-full"
							type="text"
							value={newTitle}
							onChange={(e) => setNewTitle(e.target.value)}
						/>
					</div>
					<div className="flex items-start flex-col gap-2">
						<label htmlFor="description" className="font-semibold text-xl">
							Description:
						</label>
						<input
							type="text"
							className="border-2 rounded-md p-2 w-full"
							value={newDescription}
							onChange={(e) => setNewDescription(e.target.value)}
						/>
					</div>
					<button className="bg-green-500 text-white py-2 rounded-md w-full font-bold text-xl hover:bg-green-600 cursor-pointer mt-6">
						Save
					</button>
				</form>
			</div>
			<button
				className="bg-red-600 py-(--space-sm) px-(--space-lg) text-white rounded-md cursor-pointer absolute top-4 right-16"
				onClick={onClose}
			>
				Close
			</button>
		</aside>
	);
};

export default CreateTask;
