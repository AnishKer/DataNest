# DataNest – Secure SaaS Data Management Platform

## Overview
DataNest is a full-stack SaaS web application providing secure user authentication, role-based access control, and validated CRUD operations over structured data, all inside a modern dashboard with analytics. Built for real-world backend architecture, security best practices, and scalable cloud deployment.

## Features
- **User Authentication:** Registration, login, password hashing (bcrypt), JWT access & refresh tokens, session invalidation.
- **Role-Based Access Control (RBAC):** Admin (full access), User (limited CRUD), Viewer (read-only), enforced via middleware.
- **Validated CRUD Operations:** Mongoose schema validation, server-side input sanitization, error handling.
- **Dashboard & Analytics:** User-specific dashboards, data summaries, role-based UI rendering.
- **Secure API Architecture:** Protected routes, token verification, centralized error handler, modular route structure.

## Tech Stack
- **Frontend:** React.js, React Router, Axios, JWT session handling, form validation, responsive UI.
- **Backend:** Node.js, Express.js, JWT, bcrypt, role-based middleware, error handling.
- **Database:** MongoDB, Mongoose ORM, schema validation, indexed queries.
- **Security:** bcrypt, JWT, HTTP-only cookies, route protection.
- **Cloud & Deployment:** AWS EC2/Elastic Beanstalk, MongoDB Atlas, environment-based config.

## Project Structure
```
DataNest/
├── client/                # React frontend
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── auth/
├── server/                # Node + Express backend
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── utils/
│   └── config/
├── .env
├── package.json
└── README.md
```

## Getting Started
### Prerequisites
- Node.js & npm
- MongoDB (local or Atlas)

### Setup
1. **Clone the repo:**
   ```sh
   git clone https://github.com/yourusername/DataNest.git
   cd DataNest
   ```
2. **Backend:**
   ```sh
   cd server
   npm install
   cp .env.example .env # Add your secrets
   npm start
   ```
3. **Frontend:**
   ```sh
   cd ../client
   npm install
   npm start
   ```

### Environment Variables
- `PORT` – Backend port
- `MONGO_URI` – MongoDB connection string
- `CLIENT_URL` – Frontend URL
- `JWT_SECRET` – JWT signing secret

## Usage
- Register and log in as a user.
- Access dashboard and analytics based on your role.
- Admins can manage users and data.
- All API endpoints are protected and validated.

## Deployment
- Use MongoDB Atlas for cloud database.
- Deploy backend to AWS EC2/Elastic Beanstalk.
- Set environment variables for production.
- Build frontend for production: `npm run build`.

## Scalability & Future Enhancements
- OAuth (Google/GitHub login)
- Redis for session/token blacklist
- Advanced analytics (charts, exports)
- Subscription plans
- Audit logs & activity tracking
- Microservices architecture

## Testing
- Manual API testing with Postman
- Validation at schema and route level
- Centralized error handling
- Logging support

## Resume Description (Short)
> DataNest – Built a secure SaaS web platform using React, Node.js, Express, MongoDB, and JWT featuring role-based access control, validated CRUD operations, analytics dashboards, and cloud deployment on AWS.

---

**For questions or contributions, open an issue or pull request!**
