"use client";
import React, { useMemo, useState } from "react";

export default function Chatbox() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sessionId = useMemo(
        () => `session-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`,
        []
    );

    const sendMessage = async () => {
        const userMessage = input.trim();
        if (!userMessage) return;
        setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
        setInput("");
        try {
            const response = await fetch("/api/chatbox", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage, sessionId }),
            });
            const data = await response.json();
            setMessages((prev) => [...prev, { role: "bot", text: data.response }]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "bot",
                    text: "Sorry, I'm having trouble responding right now.",
                },
            ]);
        }
    };

    return (
        <div>
            <div id="chatbot-button" onClick={() => setOpen(true)}>
                💬 FAQ Chatbot
            </div>

            {open && (
                <div
                    id="chatbot-modal"
                    className="modal"
                    style={{ display: "block" }}
                    onClick={() => setOpen(false)}
                >
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setOpen(false)}>
                            &times;
                        </span>
                        <h3>Healthcare FAQ Chatbot</h3>
                        <div id="chat-messages" style={{ maxHeight: 240, overflowY: "auto" }}>
                            {messages.map((m, i) => (
                                <p key={i}>
                                    <strong>{m.role === "user" ? "You" : "Bot"}:</strong> {m.text}
                                </p>
                            ))}
                        </div>
                        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                            <input
                                type="text"
                                id="chat-input"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                placeholder="Ask a question..."
                                style={{

                                    width: "100%",
                                    padding: "15px",
                                    fontSize: "18px",
                                    border: "2px solid #007bff",
                                    borderRadius: "6px",
                                    overflowX: "auto",
                                    whiteSpace: "nowrap",
                                    minHeight: "60px",
                                    boxSizing: "border-box"
                                }}
                            />
                            <button id="send-chat" onClick={sendMessage}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
