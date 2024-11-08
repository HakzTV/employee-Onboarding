// import express from 'express';
// import cors from 'cors';
// import connectDB from './config/db.js'; // Import your db connection
// import employeeRoutes from './routes/employeeRoutes.js'; // Import employee routes

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// connectDB();

// // Define routes
// app.use('/api/employees', employeeRoutes); // Use employee routes

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
// server/server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; // This is required to convert meta URL to a path
import connectDB from './config/db.js'; // Import your db connection
import employeeRoutes from './routes/employeeRoutes.js'; // Import employee routes

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));  // Serve React static files

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/employees', employeeRoutes); // Use employee routes

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Use dynamic port for Azure
const PORT = process.env.PORT || 5000; // Azure uses the `PORT` environment variable
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

