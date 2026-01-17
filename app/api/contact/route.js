import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    submittedAt: { type: Date, default: Date.now }
});

export const runtime = 'nodejs';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();
        await connectToDatabase();
        const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
        const newSubmission = new Contact({ name, email, message });
        await newSubmission.save();
        return NextResponse.json({ message: 'Contact form submitted successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ error: error.message || 'Error submitting contact form.' }, { status: 500 });
    }
}