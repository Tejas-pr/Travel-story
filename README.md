# Travel Story MERN App

Welcome to the Travel Story MERN App! This application allows users to share and discover travel stories. Built with the MERN stack, this app provides a seamless user experience with features for creating, reading, updating, and deleting travel stories.

## Features

- User authentication using JSON Web Tokens (JWT)
- Create, read, update, and delete (CRUD) travel stories
- Password hashing for secure storage
- Responsive design with Tailwind CSS
- Client-side routing with React Router

## Technologies Used

- **Frontend**: 
  - React
  - Tailwind CSS
  - React Router DOM

- **Backend**: 
  - Express
  - MongoDB (Mongoose)
  - JSON Web Tokens (JWT)
  - Bcrypt for password hashing
  - dotenv for environment variable management
  - CORS for cross-origin resource sharing

## Installation

Follow these steps to set up the project locally:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- A Git client (optional for cloning the repository)

### Clone the Repository

```bash
git clone https://github.com/yourusername/travel-story-mern-app.git
cd travel-story-mern-app
```

### Install Dependencies
```bash
cd backend
npm install express jsonwebtoken mongoose nodemon dotenv cors bcrypt
```

### navigate to the frontend directory
```bash
cd ../frontend
npm install tailwindcss react-router-dom
```

### Setup Environment Variables
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Backend
```
npm run dev
npm start
```

### Usage
- Users can register, log in, and create travel stories.
- Each story can be updated or deleted by the author.
- Users can view a list of all travel stories.

### Future Improvements
- Integrate OAuth for easier user authentication
- Add Framer Motion for enhanced animations
- Implement Zod for form validation
