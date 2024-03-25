# Learnable task X
---

# Hotel Rooms Management System

This project is a Hotel Rooms Management System built with Node.js, Express.js, and MongoDB. It provides a backend API for managing rooms and room types in a hotel.

## Features

- Create, read, update, and delete (CRUD) operations for rooms and room types
- Fetch rooms with optional filters (search, room type, price range)
- Error handling middleware for handling server errors gracefully
- Environment configuration using dotenv for managing environment variables
- Integration with MongoDB database, express and Winston logger.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nixxphi/hotelRooms.git
   ```

2. Install dependencies:
   ```bash
   npm install winston
   npm install mongoose
   npm install express
   npm install nodemon
   ```
3. The dotenv file need to include the following
   PORT=5000
   MONGODB_URI=mongodb+srv://nixxphi:this.is.the@redcluster.pixh5su.mongodb.net/?retryWrites=true&w=majority&appName=Redcluster

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Room Types

- **POST /api/v1/roomTypes**: Create a new room type
- **GET /api/v1/roomTypes**: Get all room types
- **GET /api/v1/roomTypes/:id**: Get a room type by ID
- **PATCH /api/v1/roomTypes/:id**: Update a room type by ID
- **DELETE /api/v1/roomTypes/:id**: Delete a room type by ID

### Rooms

- **POST /api/v1/rooms**: Create a new room
- **GET /api/v1/rooms**: Get all rooms with optional filters
- **GET /api/v1/rooms/:id**: Get a room by ID
- **PATCH /api/v1/rooms/:id**: Update a room by ID
- **DELETE /api/v1/rooms/:id**: Delete a room by ID

## Folder Structure

```

hotelRooms/
│
├── src/
│   ├── controllers/
│   │   ├── roomTypeController.js
│   │   └── roomController.js
│   │
│   ├── models/
│   │   ├── RoomType.js
│   │   └── Room.js
│   │
│   ├── routes/
│   │   ├── roomTypeRouter.js
│   │   └── roomRouter.js
│   │
│   ├── services/
│   │   └── roomService.js
│   │
│   ├── validations/
│   │   └── api-key-validator.js
│   │
│   ├── utils/
│   │   └── logger.js
|   |    └── utils.js
│   │
│   └── server.js
│
├── .env
├── package.json
└── README.md

```
### Testing

#### Unit Testing
Unit testing is essential for ensuring that individual units of your code (such as functions, modules, or classes) work as expected. In this project, we use **Mocha** as the testing framework and **Chai** as the assertion library for writing unit tests.

To run unit tests, use the following command:

```bash
npm test
```

#### Integration Testing
Integration testing is performed to test the integration of different parts of the system, such as testing API endpoints with actual HTTP requests. In this project, we use **Supertest** for making HTTP requests to our Express application and verifying the responses.

#### Test Coverage
Test coverage is a measure of how much of your code is covered by tests. It's important to aim for high test coverage to ensure that most of your code is tested and to catch any potential bugs early in the development process. We can use tools like **Istanbul** to generate test coverage reports.

#### Test Directory Structure
Our tests are organized into the `tests` directory. Within this directory, we have separate files for unit tests and integration tests. Each test file corresponds to a specific module or functionality of the application.

#### Running Tests
To run the tests, execute the following command in your terminal:

```bash
npm test
```

This command will run all the tests in the `tests` directory and provide feedback on whether they passed or failed. Additionally, it may generate reports on test coverage if configured to do so.
## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Winston


## Authors

- Igwenagu Chukwuma
