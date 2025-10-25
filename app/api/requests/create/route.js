import sql from "../../../../db/db";
import { encryptData } from "../../../../lib/encryption";
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { type, name, phone, email, preferredContactMethod } = await request.json();

        // Validate required fields
        if (!type || !name || !phone || !email || !preferredContactMethod) {
            return new Response(JSON.stringify({
                error: 'All fields are required: type, name, phone, email, preferredContactMethod'
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(JSON.stringify({ error: 'Invalid email format' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Encrypt sensitive data
        const encryptedName = encryptData(name);
        const encryptedPhone = encryptData(phone);
        const encryptedEmail = encryptData(email);

        // Create the appointment request
        const result = await sql`
            INSERT INTO "Requests" (
                type, 
                name, 
                phone, 
                email, 
                preferred_contact_method, 
                created_at
            )
            VALUES (
                ${type}, 
                ${encryptedName}, 
                ${encryptedPhone}, 
                ${encryptedEmail}, 
                ${preferredContactMethod}, 
                NOW()
            )
            RETURNING id, type, name, phone, email, preferred_contact_method, created_at
        `;

        // Send email notification
        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.GMAIL_USER,
                    pass: process.env.GMAIL_APP_PASSWORD,
                },
            });

            const mailOptions = {
                from: process.env.GMAIL_USER,
                to: process.env.GMAIL_USER,
                subject: "New Appointment Request",
                text: "A new appointment request has been submitted. Login at https://hentgesdental.com/admin to view it."
            };

            await transporter.sendMail(mailOptions);
        } catch (error) {
            console.error('Email sending failed:', error);
        }

        return new Response(JSON.stringify({
            message: 'Appointment request created successfully',
            request: {
                id: result[0].id,
                created_at: result[0].created_at
            }
        }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Error creating appointment request:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
