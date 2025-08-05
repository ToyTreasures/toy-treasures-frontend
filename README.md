# Toy Treasures Frontend

## 📌 Overview

**Toy Treasures** is a frontend web application built with **React** that serves as a marketplace for buying, selling, and exchanging children's toys and baby gear. This application is designed as a **Single Page Application (SPA)** and emphasizes modern design patterns, scalability, and responsive user experience.

---

## 🧩 Relevant Source Files

- `src/App.jsx`: Main application wrapper and user context setup
- `src/Routes.jsx`: Route definitions and protection logic
- `src/contexts/UserContext.jsx`: Global user state (auth, wishlist)
- `package.json`: Project dependencies and scripts

---

## 🎯 Purpose and Scope

This repository provides the complete frontend source code and technical structure for the Toy Treasures marketplace. It covers:

- Overall architecture
- Core systems and business features
- Technical stack and best practices

For more detailed breakdowns, refer to the following areas:
- Application Architecture & Configuration
- Routing & Navigation
- User Authentication
- Item Management
- User Account System
- Home Page Content
- Data Services & API Integration

---

## 🏗️ Application Architecture

The frontend is built using:

- **React 18.3.1**
- Component-based architecture
- Centralized state management (via Context)
- Protected routing
- Clean, modular folder structure

---

## ⚙️ Technical Stack

| Category            | Technology         | Version   | Purpose                              |
|---------------------|--------------------|-----------|--------------------------------------|
| Core Framework      | React              | 18.3.1    | UI library and component framework   |
| Routing             | react-router-dom   | 6.26.2    | Client-side routing                  |
| Build Tool          | Vite               | 5.4.1     | Development server and bundling      |
| Styling             | Tailwind CSS       | 3.4.12    | Utility-first CSS framework          |
| UI Components       | DaisyUI            | 4.12.10   | Pre-built Tailwind UI components     |
| Forms               | Formik             | 2.4.6     | Form management and validation       |
| Validation          | Yup                | 1.4.0     | Schema-based form validation         |
| HTTP Client         | Axios              | 1.7.7     | API requests                         |
| Icons               | react-icons        | 5.3.0     | Icon library                         |
| Date Utilities      | date-fns           | 4.1.0     | Date manipulation                    |

---

## 🧠 Core Systems

### 🔁 Application Initialization

- The entry point `App.jsx` initializes the app and wraps it with `UserContext` to provide global user data (auth, wishlist).
- On startup, the app checks for saved user session in `localStorage`.

### 🧭 Routing Architecture

- `Routes.jsx` defines public and protected routes.
- `ProtectedRoute` component handles authentication checks and redirects unauthenticated users.

### 🔐 Authentication System

- Authentication state is synced across:
  - `Login.jsx`
  - `Register.jsx`
  - `ProtectedRoute.jsx`
- Redirections are handled based on login requirements (`isRequiredToLogIn`).

---

## 🛒 Key Business Features

### 🏬 Shop & Item Discovery

- `Shop.jsx` enables:
  - Browsing items
  - Filtering by category
  - Pagination
- URL parameters maintain filter state.

### 👤 User Account Management

- Protected nested routes under `/account`
- Only authenticated users can access:
  - Profile
  - Orders
  - Wishlist
  - Listings

---

## 🧱 Implementation Patterns

### 💡 Component Architecture

- Functional components + hooks
- Global state via `UserContext`
- Custom hooks like `useItems`, `useToast`
- Consistent layout via `Navbar` and `Footer`

### 🧠 State Management Strategy

- Global: React Context (`UserContext`)
- Local: React component state for scoped data

---

## 🛠️ Build & Development Setup

- **Build Tool:** Vite
- **Styling:** Tailwind CSS + DaisyUI
- **Linting:** ESLint with React plugin

### 🔧 Scripts

```bash
npm run dev       # Start development server (HMR)
npm run build     # Generate production build
npm run lint      # Lint codebase
