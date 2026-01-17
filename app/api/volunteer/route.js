import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({
    name: String,
    email: String,
    skills: String,
    availability: String,
    submittedAt: { type: Date, default: Date.now },
});

export const runtime = 'nodejs';

export async function POST(request) {
    try {
        const { name, email, skills, availability } = await request.json();
        await connectToDatabase();
        const Volunteer = mongoose.models.Volunteer || mongoose.model('Volunteer', volunteerSchema);
        const newSubmission = new Volunteer({ name, email, skills, availability });
        await newSubmission.save();
        return NextResponse.json({ message: 'Volunteer registration submitted successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Volunteer API Error:', error);
        return NextResponse.json({ error: error.message || 'Error submitting volunteer registration.' }, { status: 500 });
    }
}