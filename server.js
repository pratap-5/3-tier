import express from "express";

import routes from "./routes.js";
import path from "path";
import connectDB from "./config/db.js";

// Initialize Express
const app = express();
const __dirname = path.resolve();

// Middleware
app.use(express.json());

// Routes
app.use("/api", routes);

// Serve static HTML files from the 'views' directory
app.use(express.static(path.join(__dirname, "views")));

// Define a route to render the HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Connect to DB
connectDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port  http://localhost:${PORT}`);
});
