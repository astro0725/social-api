# Social Network API
A backend API for managing users, thoughts, reactions, and friend lists, built using MongoDB, Express.js, and Mongoose.

## Table of Contents
- [Description](#Description)
- [Features](#Features)
- [Technologies](#Technologies)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)

## Description
The Social Network API is a backend service designed for social media applications. It allows users to create an account, post thoughts, comment (react) on others' thoughts, and manage friends. The API provides a flexible, scalable solution to handle large datasets through MongoDB and Mongoose. It includes full CRUD functionality (Create, Read, Update, Delete) for managing users, thoughts, reactions, and friend lists.

## Technologies
- Node.js
- Express.js for routing
- MongoDB for the database
- Mongoose as an ODM for MongoDB
- Insomnia/Postman for API testing

## Installation
- Clone the repository:
`git clone https://github.com/astro0725/social-api.git`
- Navigate to the project directory:
`cd social-api`
- Install the necessary dependencies:
`npm install`
- Ensure MongoDB is running on your machine. You can follow the MongoDB installation guide if needed.
- Start the application:
`node start` or `nodemon start`

## Usage
Once the server is running, you can use Insomnia or Postman to test the following API routes:
- Users: Create and manage users, friends, and their thoughts.
- Thoughts: Post, update, and delete thoughts.
- Reactions: Add and remove reactions to thoughts.

## License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) <br/>
This project is licensed under the MIT license. For more details, see [this link](https://opensource.org/licenses/MIT).
