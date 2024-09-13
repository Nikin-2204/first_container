const express = require('express');
const app = express();
const port = 3000; // Cổng mà ứng dụng sẽ lắng nghe

// Tạo một route đơn giản trả về "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World223!');
});

// Khởi động máy chủ và lắng nghe trên cổng đã chỉ định
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
