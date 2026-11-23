import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/db.js';
import authRoutes from "./routes/authRoutes.js"

//create and configure an express application
const app = express();
const PORT = process.env.RUNNINGPORT || 7000;

app.use(express.json());

// This route handles all authentification and authorization
app.use("/api/auth", authRoutes);



// test home route
app.get("/", (req, res) => res.json("Hellloooo"))
app.get("/users", (req, res) => res.json("Users loading..."))


// connect to the MONGODB Database
await connectDB(process.env.MONGODB_URI);

//
app.listen(PORT, () =>{
    console.log(`SERVER is running on http://localhost.${PORT}`)
})