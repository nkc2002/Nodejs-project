const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Phục vụ các file tĩnh từ thư mục hiện tại
app.use(express.static(path.join(__dirname)));

// Route chính
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Xử lý các route không tìm thấy
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Bắt đầu server khi chạy local
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

// Export cho Vercel serverless
module.exports = app;
