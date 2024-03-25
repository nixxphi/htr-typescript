const RoomType = require('./models/RoomType');
const Room = require('./models/Room');

// SERVICE FUNCTIONS FOR MANAGING ROOM TYPES
const roomTypeService = {
  async createRoomType(name) {
    const newRoomType = new RoomType({ name });
    return await newRoomType.save();
  },

  async getAllRoomTypes() {
    return await RoomType.find();
  },

  async getRoomTypeById(id) {
    return await RoomType.findById(id);
  },

  async updateRoomType(id, newName) {
    return await RoomType.findByIdAndUpdate(id, { name: newName }, { new: true });
  },

  async deleteRoomType(id) {
    return await RoomType.findByIdAndDelete(id);
  }
};

// SERVICE FUNCTIONS FOR MANAGING ROOMS
const roomService = {
  async createRoom(name, roomType, price) {
    const newRoom = new Room({ name, roomType, price });
    return await newRoom.save();
  },

  async getAllRooms() {
    return await Room.find();
  },

  async getRoomById(id) {
    return await Room.findById(id);
  },

  async updateRoom(id, newName, newPrice) {
    return await Room.findByIdAndUpdate(id, { name: newName, price: newPrice }, { new: true });
  },

  async deleteRoom(id) {
    return await Room.findByIdAndDelete(id);
  }
};

module.exports = { roomTypeService, roomService };
