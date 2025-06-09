const Berita = require('../models/Berita');
const fs = require('fs');
const path = require('path');

exports.getAllBerita = async (req, res) => {
  try {
    const berita = await Berita.find().sort({ tanggal: -1 });
    res.json(berita);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil berita' });
  }
};

exports.getBeritaById = async (req, res) => {
  try {
    const berita = await Berita.findById(req.params.id);
    if (!berita) return res.status(404).json({ error: 'Berita tidak ditemukan' });
    res.json(berita);
  } catch (err) {
    res.status(404).json({ error: 'Berita tidak ditemukan' });
  }
};

exports.createBerita = async (req, res) => {
  const { judul, isi, kategori } = req.body;
  const gambar = req.file ? req.file.filename : null;

  try {
    const newBerita = new Berita({ judul, isi, gambar, kategori });
    await newBerita.save();
    res.status(201).json(newBerita);
  } catch (err) {
    res.status(400).json({ error: 'Gagal membuat berita' });
  }
};

exports.updateBerita = async (req, res) => {
  try {
    const berita = await Berita.findById(req.params.id);
    if (!berita) return res.status(404).json({ error: 'Berita tidak ditemukan' });

    const { judul, isi, kategori } = req.body;
    berita.judul = judul;
    berita.isi = isi;
    berita.kategori = kategori;

    if (req.file) {
      if (berita.gambar) {
        const oldPath = path.join(__dirname, '../uploads', berita.gambar);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      berita.gambar = req.file.filename;
    }

    await berita.save();
    res.json(berita);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gagal mengupdate berita' });
  }
};

exports.deleteBerita = async (req, res) => {
  try {
    const berita = await Berita.findByIdAndDelete(req.params.id);
    if (berita.gambar) {
      const filePath = path.join(__dirname, '../uploads', berita.gambar);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }
    res.json({ message: 'Berita berhasil dihapus' });
  } catch (err) {
    res.status(400).json({ error: 'Gagal menghapus berita' });
  }
};