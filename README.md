# Cloud Admin Panel - Frontend

This repository contains the frontend interface of the Cloud Admin Panel, a responsive dashboard for scraping and visualizing book data.

## Features

- Admin login with password protection
- Trigger backend scraping with a single button
- Displays live book data (title and price) in a styled table
- Fully responsive and dark-themed UI
- Connected to a Node.js backend deployed on Render

## Technology Stack

- React.js (Vite)
- Axios
- HTML5 + CSS3 (inline styles)

## Live Demo

Frontend: [https://cloud-admin-frontend.vercel.app](https://cloud-admin-frontend.vercel.app)  
Backend: [https://cloud-admin-backend-ff8y.onrender.com](https://cloud-admin-backend-ff8y.onrender.com)

## Admin Login

A static password (`admin123`) is required to access the dashboard.

## Project Structure

```
cloud-admin-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Environment Variable

To configure the backend API base URL, create a `.env` file at the root and set:

```
VITE_API_BASE_URL=https://cloud-admin-backend-ff8y.onrender.com
```

This is automatically injected during Vercel deployment.

## Deployment

The frontend is deployed on **Vercel**.

**Frontend URL**:  
[https://cloud-admin-frontend.vercel.app](https://cloud-admin-frontend.vercel.app)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Ayantika-dhar/cloud-admin-frontend.git
cd cloud-admin-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

## License

This project is intended for educational and demonstration purposes.
Ayantika Dhar
contact me @ adhar9267@gmail.com

