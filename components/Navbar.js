import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div>
            <nav id="navbar">
                <h1 id="image">
                    <img src="/health.png" alt="Logo" />Healthcare Support
                </h1>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/patient">Patient Support</Link>
                    </li>
                    <li>
                        <Link href="/volunteer">Volunteer Registration</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
