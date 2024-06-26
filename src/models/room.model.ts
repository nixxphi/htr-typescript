import { Schema, model, Document, Types } from 'mongoose';

interface IRoom extends Document {
    name: string;
    roomType: Types.ObjectId;
    price: number;
    deleted: boolean;
}

const roomSchema = new Schema<IRoom>({
    name: {
        type: String,
        required: true
    }, 
    roomType: {
        type: Schema.Types.ObjectId,
        ref: "RoomType",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

export default model<IRoom>('Room', roomSchema);
