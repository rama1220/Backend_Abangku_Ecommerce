import express from "express";
import router from "./app/routes/routes.js";
import cors from "cors";

const app = express();

// Konfigurasi CORS disederhanakan
app.use(cors({
  origin: "https://abangku-ecommerce.vercel.app", // Menggunakan string langsung karena hanya satu origin
  credentials: true, // Mengizinkan cookies lintas asal (misal, untuk sesi)
}));

app.use(express.json());
app.use(router);

// Tidak perlu secara manual menetapkan header CORS atau menggunakan app.options secara eksplisit
// karena sudah ditangani oleh middleware cors.

export default app;
