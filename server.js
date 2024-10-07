const express = require('express');
const cors = require('cors');  // cors 패키지 불러오기

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());  // 모든 출처에서의 요청을 허용

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Render!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
