import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
const ai = new GoogleGenAI({});
export async function POST(request) {
    try {
        const { message } = await request.json();

        try {
            // Start a chat session with history
            const resp = await ai.models.generateContent({ model: "gemini-3-flash-preview", contents: message });
            // Send message and get response
            return NextResponse.json({ response: resp.text });
        } catch (error) {
            console.error('Gemini Error:', error);
            // Fallback to keyword matching (unchanged)
            const faqs = {
                symptoms: 'Common symptoms include fever, cough, and fatigue. Please consult a doctor for proper diagnosis.',
                vaccine: 'Vaccines are available at local clinics. Check eligibility on health.gov.',
                appointment: 'Book an appointment via our portal or call 1-800-HEALTH.',
                volunteer: 'Register as a volunteer using the volunteer form on our website.',
                hello: 'Hello! How can I help you today?',
                hi: 'Hi there! How can I assist you?',
                help: 'I can help you with symptoms, vaccines, appointments, and volunteer information. What would you like to know?',
                default: "I'm a healthcare assistant. I can help with questions about symptoms, vaccines, appointments, and volunteering. Please ask me something related to these topics."
            };
            let reply = faqs.default;
            const lowerMessage = message.toLowerCase();
            for (let key in faqs) {
                if (lowerMessage.includes(key)) {
                    reply = faqs[key];
                    break;
                }
            }
            return NextResponse.json({ response: reply });
        }
    } catch (error) {
        return NextResponse.json(
            { response: "Sorry, I'm having trouble responding right now." },
            { status: 500 }
        );
    }
}