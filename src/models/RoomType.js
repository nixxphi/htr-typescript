import mongoose from 'mongoose';

// DEFINING ROOMS
const roomTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'A perfect resting place for our weary guests.'
  },
  capacity: {
    type: Number,
    default: 2
  },
  beds: {
    type: Number,
    default: 1
  },
  price: {
    type: Number,
    default: 1000
  },
  amenities: {
    type: [String],
    default: []
  },
  image: {
    type: String,
    default: 'room.jpg'
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
});

// CREATING THE ROOMTYPE MODEL USING THE ROOMTYPESCHEMA
const RoomType = mongoose.model('RoomType', roomTypeSchema);

export default RoomType;
