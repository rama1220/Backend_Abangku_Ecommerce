import express from "express";
import router from "./app/routes/routes.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: ["https://abangku-ecommerce.vercel.app"],
    credentials: true,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://abangku-ecommerce.vercel.app");
  res.header("Access-Control-Allow-Headers", true);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  next();
});
app.options("https://abangku-ecommerce.vercel.app", cors());
app.use(express.json());
app.use(router);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Rute untuk endpoint "/products"
// app.get('/products', (req, res) => {
//   res.send('List of products');
// });



export default app;
