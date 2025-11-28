const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Route chính - serve index.html từ public
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Bắt đầu server khi chạy local
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

// Export cho Vercel serverless
module.exports = app;
