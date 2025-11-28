const express = require('express');
const path = require('path');

const app = express();

// Phục vụ các file tĩnh từ thư mục gốc
app.use(express.static(path.join(__dirname, '..')));

// Route chính
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Xử lý các route không tìm thấy
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

module.exports = app;
