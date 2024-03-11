import app from "./app.js";
import dotenv from "dotenv";
import {
  PrismaClient
} from '@prisma/client';

dotenv.config();
const prisma = new PrismaClient();

const port = process.env.APP_PORT || 5000;

// Fungsi untuk mengecek koneksi database
async function checkDatabaseConnection() {
  try {
    await prisma.$connect(); // Mencoba terkoneksi ke database
    console.log('Connection to the database has been established successfully.');
    return true;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return false;
  }
}

// Fungsi utama untuk menjalankan server
async function main() {
  if (await checkDatabaseConnection()) {
    app.listen(port, () => {
      console.log(`Express server listening on port ${port} 🚀`);
    });
  } else {
    console.log('Server did not start due to database connection issues.');
  }
}

main();