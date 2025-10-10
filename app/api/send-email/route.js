import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, number, email, type, preferredContactMethod } = body || {};

        if (!name || !number || !email || !type || !preferredContactMethod) {
            return new Response(JSON.stringify({ error: "name, number, email, type, and preferredContactMethod are required" }), { status: 400 });
        }

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
            subject: "Appointment Request: " + type,
            text: "A new appointment request has been submitted",
            html: `
            <div>
                <p><strong>Type:</strong> ${type}</p>
                <hr/>
                <p><strong>Name:</strong> ${name}</p>
                <hr/>
                <p><strong>Preferred Contact Method:</strong> ${preferredContactMethod}</p>
                <p><strong>Contact Info:</strong></p>
                <p><strong>Phone Number:</strong> ${number}</p>
                <p><strong>Email:</strong> ${email}</p>
            </div>
            `
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } catch (err) {
        console.error("send-email error", err);
        return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
    }
}


