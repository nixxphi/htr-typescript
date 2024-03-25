import express from 'express';
import { Router } from 'express';
import * as roomTypeController from '../controllers/roomTypeController';
import { asyncHandler } from '../../../utils';

// Create a new router instance
const router = Router();

// POST endpoint for creating room types
router.post('/api/v1/room-types', asyncHandler(roomTypeController.createRoomType));

// GET endpoint for fetching all room types
router.get('/api/v1/room-types', asyncHandler(roomTypeController.getAllRoomTypes));

// GET endpoint for getting a room type by ID
router.get('/api/v1/room-types/:id', asyncHandler(roomTypeController.getRoomTypeById));

// PATCH endpoint for updating a room type by ID
router.patch('/api/v1/room-types/:id', asyncHandler(roomTypeController.updateRoomTypeById));

// DELETE endpoint for deleting a room type by ID
router.delete('/api/v1/room-types/:id', asyncHandler(roomTypeController.deleteRoomTypeById));

export default router;
