import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/database.js";
import apiRoutes from './src/routes/coins/index.js';
import authRoutes from './src/routes/auth/index.js';
import { startHistoryCron } from "./src/config/scheduler.js";
dotenv.config();

const app = express();

const PORT=process.env.PORT||3000;

app.use(cors({
  origin: 'https://crypto-zeta-ivory.vercel.app', // replace with your actual frontend URL
  credentials: true // if you're sending cookies
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

await connectDB(process.env.ENVIROMENT)

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.use('/api',apiRoutes);

app.use('/auth',authRoutes);

//cron job
startHistoryCron();

app.listen(PORT, () => {
  console.log(`server running on port number ${PORT}`);
});
