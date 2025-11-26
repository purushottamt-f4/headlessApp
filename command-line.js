import { createServer } from 'http';
import queryExe from './helper/dbconnection.js';

const arg = process.argv;
const port = arg[2];   // better naming

console.log("Starting server on port:", port);

// Function to get admin users
async function getAdminUsers() {
    const sql = "SELECT * FROM admin_user";
    return await queryExe(sql, []);
}

// Create HTTP server
createServer(async (req, resp) => {

    try {
        const data = await getAdminUsers();

        // Set headers BEFORE sending any body
        resp.setHeader("Content-Type", "application/json");

        // Send JSON response
        resp.write(JSON.stringify({
            port: port,
            users: data
        }));

        resp.end(); // END RESPONSE

    } catch (error) {
        console.error("Error:", error);

        resp.statusCode = 500;
        resp.setHeader("Content-Type", "text/plain");
        resp.end("Internal Server Error");
    }

}).listen(port, () => {
    console.log(`Server running on port ${port}`);
});
