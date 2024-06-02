import mongoose from 'mongoose';

const gatheringSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    location: { type: String, required: true },
    purpose: { type: String, required: true }
});

export default mongoose.model('Gathering', gatheringSchema);
