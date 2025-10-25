export async function POST(request) {
    try {
        // Clear the authentication cookie
        const cookieOptions = [
            'authToken=',
            'HttpOnly',
            'Secure',
            'SameSite=Strict',
            'Max-Age=0', // Expire immediately
            'Path=/'
        ].join('; ');

        return new Response(JSON.stringify({
            message: 'Logout successful'
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Set-Cookie': cookieOptions
            }
        });

    } catch (error) {
        console.error('Error during logout:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
