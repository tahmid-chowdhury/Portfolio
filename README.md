# Tahmid Chowdhury's Portfolio

A modern, full-stack portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) featuring a clean, dark-themed, minimal design with subtle animations.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark/Light Theme**: Toggle between dark and light modes
- **Full-Stack Application**: Frontend built with React, backend with Express/Node.js
- **MongoDB Integration**: Store and retrieve project information and contact form data
- **Animations**: Smooth transitions and animations using Framer Motion
- **Contact Form**: Functional contact form that submits to backend API
- **Portfolio Projects**: Showcase your projects with filtering by technology

## Tech Stack

### Frontend
- React
- React Router for navigation
- Framer Motion for animations
- CSS with responsive design
- Dark/Light theme switcher

### Backend
- Node.js with Express
- MongoDB for data storage
- RESTful API design

### Deployment
- Vercel deployment ready
- API routes configured for serverless functions

## Project Structure

```
Portfolio/
├── frontend/             # React frontend
│   ├── public/           # Public assets
│   └── src/              # React source code
│       ├── components/   # Reusable components
│       ├── pages/        # Page components
│       └── App.js        # Main application
├── backend/              # Express backend
│   ├── routes/           # API routes 
│   └── server.js         # Express server
└── api/                  # Vercel API configuration
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB connection URI

### Installation

1. Clone the repository
```
git clone https://github.com/tahmid-chowdhury/portfolio.git
cd portfolio
```

2. Run the setup script to install all dependencies
```
.\setup.bat
```

Or install manually:
```
npm install
cd frontend && npm install
cd ../backend && npm install
```

3. Create a `.env` file in the backend directory:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Running the Application

#### Development Mode
Run both frontend and backend concurrently:
```
npm run dev
```

Or run separately:
```
npm run client  # Frontend on http://localhost:3000
npm run server  # Backend on http://localhost:5000
```

#### Production Build
```
npm run build
```

## Contact

Tahmid Chowdhury
- Email: tahmid.s.chowdhury@gmail.com
- LinkedIn: https://www.linkedin.com/in/tahmid-c
- GitHub: https://github.com/tahmid-chowdhury