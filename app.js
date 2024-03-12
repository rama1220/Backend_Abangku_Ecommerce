import express from "express";
import router from "./app/routes/routes.js";
import cors from "cors";

const app = express();

// Konfigurasi CORS
const corsOptions = {
  origin: ["https://abangku-ecommerce.vercel.app", "http://localhost:5173", "http://127.0.0.1:5173"], // Tambahkan origin untuk Vercel dan localhost
  credentials: true, // Mengizinkan cookie dan autentikasi sesi
  methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE", // Metode HTTP yang diizinkan
  allowedHeaders: "Content-Type, Authorization, X-Requested-With", // Header yang diizinkan
};

app.use(cors(corsOptions)); // Gunakan corsOptions untuk middleware cors

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan router dari file routes.js
app.use(router);

export default app;
