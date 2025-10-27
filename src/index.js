import express from "express";
import dotenv from "dotenv";
import itemRoutes from "./routes/itemRoutes.js"; // Import routes yang sudah dibuat

dotenv.config();

const app = express();
app.use(express.json()); // Middleware untuk parsing body JSON

// Routes utama untuk API
app.use("/api/items", itemRoutes); 

// Fallback route untuk root path (opsional, tapi baik untuk verifikasi deploy)
app.get("/", (req, res) => {
  res.send("REST API Daftar Barang Cuci Sepatu Berjalan!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});