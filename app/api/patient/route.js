import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import mongoose from 'mongoose';

const patientSupportSchema = new mongoose.Schema({
    name: String,
    email: String,
    issue: String,
    submittedAt: { type: Date, default: Date.now }
});

export const runtime = 'nodejs';

export async function POST(request) {
    try {
        const { name, email, issue } = await request.json();
        await connectToDatabase();
        const PatientSupport = mongoose.models.PatientSupport || mongoose.model('PatientSupport', patientSupportSchema);
        const newSubmission = new PatientSupport({ name, email, issue });
        await newSubmission.save();
        return NextResponse.json({ message: 'Patient support submitted successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Patient API Error:', error);
        return NextResponse.json({ error: error.message || 'Error submitting patient support.' }, { status: 500 });
    }
}