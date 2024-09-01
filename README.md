# E-commerce Web Application

![Project Screenshot](https://github.com/user-attachments/assets/de6855b8-9721-4fd5-89d6-fa27f4cdbd0c)


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)

## Introduction

This is a ON-GOING full stack e-commerce web application that allows users to browse products, add them to a cart, and complete purchases. It includes a robust admin panel for managing products, orders, and users. The application is built using the MERN (MongoDB, Express.js, React, Node.js) stack and is fully responsive across various devices.

## Features

- User Authentication (Register, Login, Logout)
- Product Listing and Search
- Shopping Cart Functionality
- Order Management
- Payment Integration
- Admin Dashboard for Product and Order Management
- Image Upload and Management
- Responsive Design

## Technologies Used

### Frontend

- React.js
- Redux (for state management)
- React Router (for navigation)
- Fetch (for API requests)
- Tailwind CSS (for styling)

### Backend

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (JSON Web Token) for Authentication
- Cloudinary (for image storage)
- SSLCOMMERZ (for payment processing)

### Deployment

- Frontend & Backend: Microsoft Azure [As monolithic architecture]
- Database: MongoDB Atlas
- Image Storage: Cloudinary

## Usage

- **User**: Register or log in to your account, browse products, add them to your cart, and proceed to checkout.
- **Admin**: Log in to the admin dashboard, manage products, view orders, and handle user management.

## Project Structure

```bash
mini-shop/
│
├── client/         # Frontend code
│   ├── public/       # Public assets
│   ├── src/
│   │   ├── assets/      # Contain static Files [image, stylesheets, etc]
│   │   ├── components/  # React reasuble components
│   │   ├── pages/       # React pages
│   │   ├── redux/       # Redux store, actions, reducers
│   │   ├── services/    # Handling API requests and other external Service.
│   │   ├── App.js       # Main React component
│   │   ├── index.js     # Entry point
│   │   └── ...
│   └── ...
├── config/       # Configuration files (DB Connection, cloudinary)
├── controllers/  # Route controllers
├── middlewares/  # Custom middlewares
├── models/       # Mongoose models
├── routes/       # API routes
├── services/     # Indivisuals Solutions for every Feature
├── utils/        # Smalls helper function
├── validation/   # Custom validation for email, password and others
└── server.js     # Express server
└── ...
```

## Deployment

The application will be deploy and host on the following platforms:

This project based on Monolithic architecture so that all sections will be in same root file.
- **Frontend & Backend**: [Azure](https://azure.microsoft.com/)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Image Storage**: [Cloudinary](https://cloudinary.com/)

You can access the live demo here: [Live Demo -Coming soon](#)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

- **Your Name**: [My Portfolio](https://sahad.vercel.app/)
- **Email**: [sahaduzzaman.cse@gmail.com](sahaduzzaman.cse@gmail.com)

---
