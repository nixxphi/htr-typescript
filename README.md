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
The API key is "learnable.task.X"

1. Clone the repository:
   ```bash
   git clone https://github.com/nixxphi/hotel-room-management.git
   ```

2. Install dependencies:
   ```bash
   npm install pino
   npm install mongoose
   npm install express
   npm install nodemon
   npm install chai sinon --save-dev
   npm install mocha
   npm install supertest
   npm install bcrypt jsonwebtoken joi
   ```
3. The dotenv file includes the following
   - PORT=5000
   - MONGODB_URI=mongodb+srv://nixxphi:___________@redcluster.pixh5su.mongodb.net/?retryWrites=true&w=majority&appName=Redcluster

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
## Technologies Used

- Node.js
- "bcrypt": "^5.1.1"
- "cookie-parser": "^1.4.6"
- "cors": "^2.8.5"
- "dotenv": "^16.4.5"
- "express": "^4.19.1"
- "express-async-errors": "^3.1.1"
- "helmet": "^7.1.0"
- "jsonwebtoken": "^9.0.2"
- "mongoose": "^8.2.3"
- "morgan": "^1.10.0"
- "pino": "^8.19.0"
- "winston": "^3.12.0"
- "chai": "^5.1.0"
- "mocha": "^10.3.0"
- "nodemon": "^3.1.0"
- "sinon": "^17.0.1"
- "supertest": "^6.3.4"

## Authors

- Igwenagu Chukwuma
