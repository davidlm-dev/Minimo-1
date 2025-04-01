import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    number: {
        type: Number,
        required: true
    }
});

export interface ITag {
    name: string;
    number: number;
    idUsuario: string;
    description?: string;
}

const Tag = mongoose.model<ITag>('Tag', tagSchema);
export default Tag;
