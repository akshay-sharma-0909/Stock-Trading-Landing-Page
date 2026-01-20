## Stock Trading Platform 
** Stock Trading Platform** is a web-based application that simulates real-world stock trading functionality. The platform allows users to track market holdings, view positions, place orders, and manage their trading dashboard in a structured and secure way.

This project replicates the core UI and backend workflow of Zerodha, focusing on portfolio management, authentication, and RESTful APIs.

## Features
- ** User Authentication **: Secure user and owner accounts with role-based access control.- 

## Installation
**Prerequisites**
- Node.js (for backend)
- MongoDB (for database)
- React (for frontend

**Steps to Install**
1. Clone the Repository:
```bash
git clone https://github.com/akshay-sharma-0909/Stock-Trading-Landing-Page
```
2. Install Backend Dependencies:

Navigate to the frontend/ folder and run:
```bash
node install
```

3. Install Frontend Dependencies:

Since the frontend uses React, CSS, and JavaScript, there are no specific package dependencies. You can simply open the frontend/ folder and start working with the files.

4. Configure Database:

Set up your MongoDB instance and configure the connection string in the backend/config/db.js file.

5. Start the Application:

For the :
```bash
cd frontend
npm start
```

6. Visit https: https://stock-trading-landing-page.onrender.com in your browser to access the application.

## Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Fronted :React.js

## Folder Structure
```
project-root/
│
├── controllers/        # Business logic for routes
├── init/               # DB connection & initialization files
├── model/              # MongoDB schemas & models
├── patches/            # Utility patches or fixes
├── public/             # Static assets (CSS, JS, images)
├── routes/             # Express route definitions
├── utils/              # Helper & utility functions
├── views/              # EJS templates
│
├── .gitignore
├── CloudConfig.js      # Cloud service configuration
├── joi.js              # Joi validation schemas
├── app.js              # Express app entry point
├── middleware.js       # Custom middleware
├── package.json
└── package-lock.json

```

## Screenshots
***Login page***

<img width="494" height="547" alt="Image" src="https://github.com/user-attachments/assets/62de9edc-8ddd-494f-af0e-d4e45202974d" />


***SignUP Page***


<img width="501" height="672" alt="Image" src="https://github.com/user-attachments/assets/340de991-cae1-4b50-8db5-0cce58277981" />




***Landing Page***
<img width="1872" height="906" alt="Image" src="https://github.com/user-attachments/assets/46cc71df-7c63-40a3-9099-dfbdaeca0eda" />




## Contributing
We welcome contributions from the community! If you'd like to improve or add features to this project, feel free to fork the repository, make your changes, and submit a pull request. Please ensure that your code adheres to the project's coding standards and is well-documented.




** Node.js and Express.js for building the backend server.

** MongoDB for storing data.
** React.js for  Building Frontend.

