import sql from "../../../../db/db";
import jwt from 'jsonwebtoken';
import { decryptData } from "../../../../lib/encryption";

// Middleware function to verify JWT token from cookie
function verifyToken(request) {
    const cookieHeader = request.headers.get('cookie');

    if (!cookieHeader) {
        return { error: 'No authentication cookie provided', status: 401 };
    }

    // Parse cookies to find authToken
    const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        acc[key] = value;
        return acc;
    }, {});

    const token = cookies.authToken;

    if (!token) {
        return { error: 'No authentication token found', status: 401 };
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return { success: true, user: decoded };
    } catch (error) {
        return { error: 'Invalid or expired token', status: 401 };
    }
}

export async function GET(request) {
    try {
        // Verify JWT token
        const tokenVerification = verifyToken(request);
        if (!tokenVerification.success) {
            return new Response(JSON.stringify({ error: tokenVerification.error }), {
                status: tokenVerification.status,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Get all appointment requests
        const requests = await sql`
            SELECT 
                id,
                type,
                name,
                phone,
                email,
                preferred_contact_method,
                created_at
            FROM "Requests" 
            ORDER BY created_at DESC
        `;

        // Decrypt sensitive data for each request
        const decryptedRequests = requests.map(request => ({
            ...request,
            name: decryptData(request.name),
            phone: decryptData(request.phone),
            email: decryptData(request.email)
        }));

        return new Response(JSON.stringify({
            requests: decryptedRequests,
            count: decryptedRequests.length
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Error fetching requests:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
