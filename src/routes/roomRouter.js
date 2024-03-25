import express from 'express';
import { Router } from 'express'; 
import * as roomController from '../controllers/roomController'; 
import { asyncHandler } from '../utils'; 

// CREATE A NEW ROUTER INSTANCE
const router = Router();

// POST endpoint for creating a new room
router.post('/api/v1/rooms', asyncHandler(roomController.createRoom));

// GET endpoint for fetching all rooms
router.get('/api/v1/rooms', asyncHandler(roomController.getAllRooms));

// GET endpoint for fetching a single room by ID
router.get('/api/v1/rooms/:id', asyncHandler(roomController.getRoomById));

// PATCH endpoint for updating a room by ID
router.patch('/api/v1/rooms/:id', asyncHandler(roomController.updateRoomById));

// DELETE endpoint for deleting a room by ID
router.delete('/api/v1/rooms/:id', asyncHandler(roomController.deleteRoomById));

export default router;
