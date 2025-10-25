import sql from "../../../../db/db";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request) {
    try {
        const { username, password } = await request.json();

        if (!username || !password) {
            return new Response(JSON.stringify({ error: 'Username and password are required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Find the user
        const user = await sql`
            SELECT id, username, password FROM "Admin" WHERE username = ${username}
        `;

        if (user.length === 0) {
            return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user[0].password);

        if (!isValidPassword) {
            return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Create JWT token (valid for 15 minutes)
        const token = jwt.sign(
            {
                userId: user[0].id,
                username: user[0].username
            },
            process.env.JWT_SECRET,
            { expiresIn: '15m' }
        );

        // Create HTTP-only secure cookie
        const cookieOptions = [
            `authToken=${token}`,
            'HttpOnly',
            'Secure',
            'SameSite=Strict',
            'Max-Age=900', // 15 minutes in seconds
            'Path=/'
        ].join('; ');

        return new Response(JSON.stringify({
            message: 'Login successful',
            user: {
                id: user[0].id,
                username: user[0].username
            }
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Set-Cookie': cookieOptions
            }
        });

    } catch (error) {
        console.error('Error during login:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
