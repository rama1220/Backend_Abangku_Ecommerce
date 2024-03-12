import express from "express";
import router from "./app/routes/routes.js";
import cors from "cors";

const app = express();

// Konfigurasi CORS yang lebih dinamis
const allowedOrigins = [
  "https://abangku-ecommerce.vercel.app",
  "http://localhost:5173",
  "http://127.0.0.1:5173"
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  allowedHeaders: "Content-Type, Authorization, X-Requested-With"
};

app.use(cors(corsOptions));

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan router dari file routes.js
app.use(router);

export default app;
