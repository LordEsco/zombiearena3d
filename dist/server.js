import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";
import { RoomManager } from "./server/RoomManager.js"; // Note the .js extension for ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));
async function startServer() {
    const app = express();
    const httpServer = createServer(app);
    const io = new Server(httpServer);
    const PORT = parseInt(process.env.PORT || "3000", 10);
    // Initialize Game Managers
    const roomManager = new RoomManager(io);
    // Socket.io connection handling
    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);
        roomManager.handleConnection(socket);
    });
    // API routes
    app.get("/api/health", (req, res) => {
        res.json({ status: "ok" });
    });
    // Vite middleware for development
    if (process.env.NODE_ENV !== "production") {
        // Dynamic import to avoid production dependency on Vite
        const { createServer: createViteServer } = await import("vite");
        const vite = await createViteServer({
            server: { middlewareMode: true, hmr: { port: 3000 } },
            appType: "spa",
        });
        app.use(vite.middlewares);
    }
    else {
        // Production static serving
        // In production, server.js is in /dist, so we serve the current directory
        app.use(express.static(__dirname));
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "index.html"));
        });
    }
    httpServer.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });
}
startServer();
