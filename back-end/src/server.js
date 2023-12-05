/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(express.json());

app.use(cors());
const port = 8000;

const upload = multer({storage: multer.memoryStorage()});

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

// eslint-disable-next-line no-unused-vars
app.post('/fotoDB', upload.single('gambar'), (req, res) => {
  const gambar = req.file;
  const gambarv2 = req.body.gambar;
  const judul = req.body.judul;

  res.status(200).json({ message: 'File uploaded successfully.', judul: judul, gambar: gambar });
});

app.listen(port, () => {
  console.log(`Server sudah menyala pada port ${port}`);
});
