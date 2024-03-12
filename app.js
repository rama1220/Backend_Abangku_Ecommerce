import express from "express";
import router from "./app/routes/routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["https://abangku-ecommerce.vercel.app", "http://127.0.0.1:5173", "https://abangku-ecommerce.vercel.app"],
    credentials: true,
  })
);

app.use(express.json());

// Middleware untuk menambahkan header CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(router);

export default app;
