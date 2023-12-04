/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());
const port = 8000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'donate_web',
});

app.get('/', (req, res) => {
  const sql = 'SELECT * FROM donasi';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/donates', (req, res) => {
  const sql = 'INSERT INTO donasi (`nama_donatur`, `email`, `judul_donasi`, `batas_donasi`, `kategori_donasi`, `deskripsi_donasi`, `no_telepon`, `alamat`, `poster`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [
    req.body.nama,
    req.body.email,
    req.body.judul,
    req.body.date,
    req.body.kategori,
    req.body.deskripsi,
    req.body.number,
    req.body.alamat,
    req.body.gambar,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error saat menyimpan data ke database:', err);
      return res.status(500).json({ error: 'Terjadi kesalahan saat menyimpan data.' });
    }
    console.log('Data berhasil disimpan:', result);
    return res.status(200).json({ message: 'Data berhasil disimpan.' });
  });
});

app.listen(port, () => {
  console.log(`Server sudah menyala pada port ${port}`);
});
