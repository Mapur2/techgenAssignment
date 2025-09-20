
# React.js Dashboard Internship Task

**Candidate:** Rupam Modak
**Role:** React.js Developer

This is a simple dashboard web application built as part of an internship interview task. The app demonstrates React functional components, hooks, and integration with APIs, along with a basic login and registration flow.

---

## Features

* **Login & Registration:**

  * Users can register a new account or log in with existing credentials.
  * JWT-based authentication for session management.
  * Simple form validation (email format, password length).

* **Dashboard:**

  * Displays a list of users fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
  * Handles loading and error states gracefully.
  * Minimal, clean CSS for a simple but readable UI.

* **Architecture & Design:**

  * Functional components with React Hooks (`useState`, `useEffect`).
  * Optional MVVM-inspired structure: separate concerns for UI, state, and data fetching.
  * Clean and maintainable code for scalability.

---

## Tech Stack

* **Frontend:** React.js (functional components + hooks)
* **Backend (for login/register API):** Node.js + Express.js
* **Database:** In-memory storage or JSON file for simplicity
* **API:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) for fetching user data
* **Styling:** Minimal CSS (no frameworks)

---

## Live Links

* **Frontend:** [https://techgen-assignment-dst2.vercel.app/](https://techgen-assignment-dst2.vercel.app/)
* **Backend:** [https://techgenassignment.onrender.com/](https://techgenassignment.onrender.com/)

---

## Project Structure (MVVM-inspired)

```
src/
│
├─ components/      # Reusable UI components (Button, Input, Loader)
├─ pages/           # Pages (Login, Register, Dashboard)
└─ App.jsx          # Root component and routing
```

---

## API Endpoints

* `POST /api/register` – Register a new user
* `POST /api/login` – Authenticate user and return JWT
* `GET /api/users` – Fetch user list (from JSONPlaceholder)

---

## Usage

1. Register a new account.
2. Log in with your credentials.
3. View the dashboard with the list of users.
4. Logout when done.

---

## Bonus / Extra Credit

* Clean and minimal UI/UX with responsive layout
* Error and loading state handling
* Easy to extend for future features

---

If you want, I can also **add a small visual flow diagram of login → fetch users → dashboard**, which will make your README stand out even more for the interview submission.

Do you want me to do that?
