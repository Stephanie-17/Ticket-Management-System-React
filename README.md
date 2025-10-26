#  FlowDesk — Ticket Management System

FlowDesk is a modern **ticket management system** built with **React** and **TailwindCss**, designed to help teams handle customer requests efficiently.  
It allows users to **create, read, update, and delete (CRUD) tickets**, and includes **authentication** with local storage persistence.

---

##  Features

-  **User Authentication**
  - Sign up, log in, and log out with persistent sessions.
-  **Ticket Management**
  - Create, edit, delete, and update ticket statuses.
  - Statuses: `open`, `in_progress`, `closed`.
-  **Local Storage Integration**
  - Stores users and tickets locally per account.
-  **Modern UI**
  - Built with **Tailwind CSS** for responsive design.
-  **Context API**
  - Auth and Ticket states are managed globally using React Context.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React (Vite)** | Frontend Framework |
| **React Router** | Navigation and Routing |
| **Tailwind CSS** | Styling |
| **Context API** | State Management |
| **Local Storage** | Persistent Data |
| **Node.js / npm** | Package Management |

---

## ⚙️ Installation & Setup

### 1️ Clone the Repository

```bash
git clone https://github.com/your-username/flowdesk.git
cd flowdesk
npm install
npm run dev
```

---  


##  Login & Sign-Up Info

- New users can sign up from /sign-up.

- Credentials are stored locally (not on a server).

- Tickets are saved under each user’s local storage key.

---

## Environment Variables

No external APIs are required — this app runs entirely in the browser using local storage.

### Navigation
## Page	             ## Route    
- LandingPage	          /	    
- Sign Up/Login 	   /sign-up	
- Dashboard	        /dashboard	
- Ticket Management 	/tickets
|Page               |   Route     |
|-------------------|-------------|
|LandingPage        |     /       |
|AuthForm           |   /sign-up  |
|Dashboard          |  /dashboard |
|Ticekt Management  | /tickets



## Author
## FlowDesk
Developed by Stephanie
📧 [emenikesteph@gmail.com]

