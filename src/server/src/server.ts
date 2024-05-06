import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './router/user.router';
import connectDB from "./database/db";

const app = express();
const PORT = 3000;
connectDB();

app.use(bodyParser.json());

// Use user routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
