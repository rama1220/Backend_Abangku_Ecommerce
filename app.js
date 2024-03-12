import express from "express";
import router from "./app/routes/routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173", "https://abangku-ecommerce.vercel.app"],
    credentials: true,
  })
);

app.use(express.json());
app.use(router);

export default app;
