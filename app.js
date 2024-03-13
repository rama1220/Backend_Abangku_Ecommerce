import express from "express";
import router from "./app/routes/routes.js";
import cors from "cors";

const app = express();

// Mengaktifkan CORS untuk domain yang ditentukan dan mengizinkan credentials
app.use(
  cors({
    origin: ["https://abangku-ecommerce.vercel.app"], // Izinkan domain ini untuk membuat request
    credentials: true, // Izinkan credentials seperti cookies, authorization headers, dll.
  })
);

// Middleware untuk parsing request dengan content-type - application/json
app.use(express.json());

// Menggunakan router dari file eksternal
app.use(router);

export default app;
