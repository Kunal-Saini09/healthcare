"use client";
import React, { useCallback, useRef } from "react";

export default function PatientPage() {
    const isSubmittingRef = useRef(false);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (isSubmittingRef.current) return;
        isSubmittingRef.current = true;
        const form = e.currentTarget;
        try {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            const response = await fetch("/api/patient", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Server responded ${response.status}: ${text}`);
            }
            const result = await response.json();
            alert(result.message);
            form.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form. Please check console for details.");
        } finally {
            isSubmittingRef.current = false;
        }
    }, []);

    return (
        <div>
            <section id="form">
                <div className="form-container">
                    <h2>Patient Support</h2>
                    <form id="patient-form" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="issue" placeholder="Describe your issue" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
            <div className="home">
                <p id="phome">
                    Return to Home page, <a href="/">click here </a>
                </p>
            </div>
        </div>
    );
}
