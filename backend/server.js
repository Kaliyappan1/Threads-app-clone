import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import {v2 as cloudinary} from "cloudinary";


dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

cloudinary.config({
  cloud_name: process.env.ClOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})


// Middleware
app.use(express.json({ limit: '50mb' })); // to parse JSON data in the body
app.use(express.urlencoded({ extended: true})) // To parse form data in te req.body
app.use(cookieParser());

//  Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/messages", messageRoutes);


app.listen(PORT, () =>
  console.log(`server started at https://localhost:${PORT}`)
);
