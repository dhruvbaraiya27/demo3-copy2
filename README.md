# Job Portal Application

## Project Overview
A full-stack Job Portal application with separate admin and employee functionalities, built using Node.js, Express, MongoDB, React.js, and Redux.

## Project Structure
```
job-portal/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
└── frontend/
    ├── public/
    └── src/
        ├── components/
        ├── pages/
        ├── redux/
        ├── services/
        └── utils/
```

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB

## Backend Setup

### Installation
1. Navigate to the backend directory
```bash
cd backend
npm install
```

### Environment Variables
Create a `.env` file in the backend directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/job_portal
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=1d
```

### Available Scripts
- `npm start`: Start the server
- `npm run dev`: Start with nodemon for development
- `npm test`: Run tests

### Backend Dependencies
- Express
- Mongoose
- jsonwebtoken
- bcryptjs
- dotenv
- cors

## Frontend Setup

### Installation
1. Navigate to the frontend directory
```bash
cd frontend
npm install
```

### Environment Variables
Create a `.env` file in the frontend directory:
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Available Scripts
- `npm start`: Run the development server
- `npm run build`: Build for production
- `npm test`: Run tests

### Frontend Dependencies
- React
- Redux
- React Router
- Axios
- Material-UI
- Redux Thunk

## Features

### User Authentication
- User registration with role-based access (admin/employee)
- JWT-based authentication
- Protected routes

### Admin Functionalities
- Create and manage job listings
- View all users
- Restricted access to admin-specific pages

### Employee Functionalities
- View available job listings
- Access employee-specific pages

## API Endpoints

### Authentication
- `POST /api/auth/register`: User registration
- `POST /api/auth/login`: User login
- `GET /api/auth/current-user`: Get current user details

### Jobs (Admin)
- `POST /api/create/job`: Create a new job listing
- `GET /api/jobs`: Get all job listings

### Users (Admin)
- `GET /api/users`: Get all users
- `POST /api/user/create`: Create a new user

## Development Workflow

1. Clone the repository
```bash
git clone https://github.com/yourusername/job-portal.git
cd job-portal
```

2. Setup Backend
```bash
cd backend
npm install
npm start
```

3. Setup Frontend
```bash
cd frontend
npm install
npm start
```

## Deployment Considerations
- Configure environment variables for production
- Use PM2 or similar for Node.js process management
- Use a production-ready MongoDB instance
- Set up CORS and security headers

## Troubleshooting
- Ensure MongoDB is running
- Check console for specific error messages
- Verify all environment variables are set correctly

## Security Best Practices
- Use HTTPS in production
- Implement rate limiting
- Sanitize and validate all inputs
- Keep dependencies updated

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



