import { Schema, model, Document } from 'mongoose';

enum UserRole {
    Admin = 'admin',
    Guest = 'guest'
}

interface IUser extends Document {
    username: string;
    password: string;
    role: UserRole;
    deleted: boolean;
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: [UserRole.Admin, UserRole.Guest],
        default: UserRole.Guest
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default model<IUser>('User', userSchema);
