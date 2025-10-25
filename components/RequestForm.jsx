"use client";

import { useState } from "react";

export default function RequestForm() {

    const [formData, setFormData] = useState({
        type: "",
        name: "",
        phone: "",
        email: "",
        preferredContactMethod: "",
    });

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const inputFields = [
        { name: "type", placeholder: "Appointment Type", label: "Reason for the Appointment", type: "select", options: ["Emergency/Specific Concern", "Routine Cleaning & Checkup", "Get Established as New Patient", "Cosmetic Consultation", "Other"] },
        { name: "name", placeholder: "John Doe", type: "text", label: "First and Last Name" },
        { name: "phone", placeholder: "(480) 555-0198", type: "text", label: "Phone Number" },
        { name: "email", placeholder: "john.doe@example.com", type: "email", label: "Email" },
        { name: "preferredContactMethod", placeholder: "Preferred Contact Method", label: "Preferred Contact Method", type: "select", options: ["Phone Call", "Text Message", "Email"] }
    ];

    const validatePhoneNumber = (phone) => {
        // Remove all non-digit characters
        const cleaned = phone.replace(/\D/g, '');
        // Check if it's a valid US phone number (10 digits)
        return /^\d{10}$/.test(cleaned);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
        setError('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validatePhoneNumber(formData.phone)) {
            setError('Please enter a valid 10-digit phone number');
            return;
        }

        setLoading(true);

        const formDataObj = new FormData(e.target);
        const data = Object.fromEntries(formDataObj);

        try {
            const response = await fetch('/api/requests/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to send request');
            }

            const result = await response.json();
            setSuccess('Request sent successfully');
            setFormData({ type: "", name: "", phone: "", email: "", preferredContactMethod: "" });
        } catch (error) {
            console.error('Error sending request', error);
            setError(error.message || 'Failed to send request. Please try again later or contact us directly at (480) 964-2131.');
        } finally {
            setLoading(false);
        }

    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            {inputFields.map((field) => (
                <div key={field.name} className="w-full flex flex-col gap-2">
                    <label className="sm:text-lg text-base font-bold text-dark">{field.label}</label>
                    {field.type === "select" ? (
                        <select key={field.name} name={field.name} defaultValue="" onChange={handleChange} className="text-dark border-1 border-dark font-semibold rounded-md p-2" required>
                            <option value="" disabled>Select {field.placeholder}</option>
                            {field.options.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            key={field.name}
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ''}
                            onChange={handleChange}
                            className="text-dark border-1 border-dark font-semibold rounded-md p-2 w-full"
                            required
                        />
                    )}
                </div>
            ))}
            {error && (
                <p className="text-red-500 mt-1 border-1 border-red-500 rounded-md p-2 w-full text-center font-semibold">{error}</p>
            )}
            <button type="submit" className={`button-4 my-4 ${loading || success ? 'disabled' : ''}`} disabled={loading || success}>
                {loading || success ?
                    <div className="flex flex-row flex-nowrap items-center justify-center gap-2 text-xl font-semibold">
                        {loading ?
                            <div className="flex flex-row flex-nowrap items-center justify-center gap-2">
                                <div className="w-4 h-4 border-2 border-primary rounded-full border-t-transparent animate-spin"></div>
                                Sending Request...
                            </div>
                            : 'Request Sent Successfully! We will contact you as soon as possible. Thank you!'}
                    </div>
                    :
                    'Submit Request'}
            </button>
        </form>
    );
}

