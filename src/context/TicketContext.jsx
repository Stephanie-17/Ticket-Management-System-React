import React from "react";
import { createContext, useState, useEffect } from "react";
import { useAuth } from "./useAuth";

const TicketContext = createContext();
export const TicketProvider = ({ children }) => {
	const [tickets, setTickets] = useState([]);
	const { user } = useAuth();

	const saveTickets = (updatedTickets) => {
		if (user) {
			setTickets(updatedTickets);
			localStorage.setItem(
				`user_${user.email}_ticket`,
				JSON.stringify(updatedTickets)
			);
		} else {
			setTickets([]);
		}
	};

	const addTicket = (newTicket) => {
		if (user) {
			const updatedTicket = [...tickets, newTicket];
			setTickets(updatedTicket);

			localStorage.setItem(
				`user_${user.email}_ticket`,
				JSON.stringify(updatedTicket)
			);
		}
	};

	const updateTicket = (id, updatedFields) => {
		if (user) {
			const updatedTickets = tickets.map((t) =>
				t.id === id ? { ...t, ...updatedFields } : t
			);
			saveTickets(updatedTickets);
		}
	};

	const deleteTicket = (id) => {
		if (user) {
			const updatedTickets = tickets.filter((t) => t.id !== id);
			saveTickets(updatedTickets);
		}
	};

	useEffect(() => {
		if (user) {
			const savedTickets =
				JSON.parse(localStorage.getItem(`user_${user.email}_ticket`)) || [];
			setTickets(savedTickets);
		}
	}, [user]);

	return (
		<TicketContext.Provider
			value={{ tickets, addTicket, deleteTicket, updateTicket }}
		>
			{children}
		</TicketContext.Provider>
	);
};

export default TicketContext;
