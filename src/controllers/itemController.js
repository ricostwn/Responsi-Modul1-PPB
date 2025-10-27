import { ItemModel } from "../models/itemModel.js";

export const ItemController = {
  async getAll(req, res) {
    try {
      // Mengambil parameter status dari query string: GET /items?status=Selesai
      const { status } = req.query; 
      const items = await ItemModel.getAll(status);
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const item = await ItemModel.getById(id);
      if (!item) {
        return res.status(404).json({ error: "Item tidak ditemukan" });
      }
      res.json(item);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const item = await ItemModel.create(req.body);
      res.status(201).json({
        message: "Data sepatu berhasil ditambahkan.",
        data: item,
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      await ItemModel.update(id, req.body);
      res.json({ message: "Status sepatu berhasil diperbarui." });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      const { id } = req.params;
      const result = await ItemModel.remove(id);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};