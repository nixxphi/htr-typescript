import GenericService from "./generic.service.ts";
import User, { UserDocument } from "../models/user.model.ts";
import Room, { RoomDocument } from "../models/room.model.ts";
import RoomType, { RoomTypeDocument } from "../models/roomType.model.ts";

export const roomService = new GenericService<RoomDocument>(Room);
export const roomTypeService = new GenericService<RoomTypeDocument>(RoomType);
export const userService = new GenericService<UserDocument>(User);
