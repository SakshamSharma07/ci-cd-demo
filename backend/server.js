const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Allow requests from frontend container and localhost
app.use(cors({
  origin: ['http://localhost:3000', 'http://frontend:80'],
  credentials: true
}));

app.get('/', (req, res) => {
  res.json({ message: "Hello from Backend 👋" });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
