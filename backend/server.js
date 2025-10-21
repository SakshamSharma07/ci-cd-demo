import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


app.get('/', (req, res) => {
  res.json({ message: "Hello from Backend 👋" });
});

app.listen(PORT, () => 
  console.log(`✅ Backend running on http://localhost:${PORT}`)
);
