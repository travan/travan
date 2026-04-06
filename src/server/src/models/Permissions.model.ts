import mongoose, { Document, Schema } from 'mongoose';

interface IPermission extends Document {
    name: string;
    scope: string;
    actions: string[]
}

const PermissionSchema = new Schema<IPermission>({
    name: { type: String, required: true, unique: true },
    scope: { type: String, required: true },
    actions: { type: [String], required: true }
});

const Permission = mongoose.model<IPermission>('permissions', PermissionSchema);
export default Permission;