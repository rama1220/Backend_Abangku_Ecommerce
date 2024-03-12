import express from "express";
import router from "./app/routes/routes.js";
import cors from "cors";

const app = express();

// Konfigurasi CORS
app.use(cors({
  origin: ["https://abangku-ecommerce.vercel.app", "http://localhost:5173", "http://127.0.0.1:5173"],
  credentials: true,
}));

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan router dari file routes.js
app.use(router);

export default app;
