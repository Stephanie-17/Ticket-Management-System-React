import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { TicketProvider } from "./context/TicketContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<TicketProvider>
					<App />
				</TicketProvider>
			</AuthProvider>
		</BrowserRouter>
	</StrictMode>
);
