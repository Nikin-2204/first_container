const express = require('express');
const app = express();
const port = 8080; // Cổng mà ứng dụng sẽ lắng nghe

// Tạo một route đơn giản trả về "Hello World!"
app.get('/', (req, res) => {
  res.json({
    status:200,
    message: "Hello so lyly update 1234556"
  });
});

// Khởi động máy chủ và lắng nghe trên cổng đã chỉ định
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
