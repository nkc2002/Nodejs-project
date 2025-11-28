const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Phục vụ các file tĩnh từ thư mục hiện tại
app.use(express.static(path.join(__dirname)));

// Route chính
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Xử lý các route không tìm thấy
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Bắt đầu server (chỉ khi không chạy trên Vercel)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
  });
}

module.exports = app;
