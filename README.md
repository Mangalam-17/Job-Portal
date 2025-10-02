# Job-Portal

This job portal provides smart job suggestions based on user resume analysis and preferences. It also offers resume improvement suggestions. The AI features include resume parsing, AI-based job matching, and a career advice chatbot.

#### Folder-Structure

JOB-PORTAL/
│── Backend/
│ ├── node_modules/
│ ├── src/
│ │ ├── config/ → DB connection, env configs 
│ │ │ └── database.js
│ │ ├── controllers/ → Business logic (login, applyJob, postJob, etc.)
│ │ ├── middleware/ → Auth, validation, error handlers
│ │ ├── models/ → Mongoose/Sequelize schemas
│ │ ├── routes/ → Express route definitions
│ │ ├── utils/ → Helper functions (email, tokens, etc.)
│ │ ├── app.js → Express app setup (middlewares, routes)
│ │ └── server.js → Start server (listens on port)
│ ├── .env
│ ├── package.json
│ └── package-lock.json
│
│── Frontend/ →  React client code
│── README.md
