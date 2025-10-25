import { useContext } from "react";
import TicketContext from "./TicketContext";

export const useTicket = () => useContext(TicketContext)