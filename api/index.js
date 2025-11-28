const express = require('express');
const path = require('path');

const app = express();

// Phục vụ các file tĩnh từ thư mục gốc
app.use(express.static(path.join(__dirname, '..')));

// Route chính
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// API routes (có thể thêm các route khác ở đây)
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Xử lý các route không tìm thấy - phải ở cuối cùng
app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Export cho Vercel
module.exports = app;
