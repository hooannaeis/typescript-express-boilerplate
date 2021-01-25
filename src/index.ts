import express from 'express';

const app = express();
const PORT = 8000;

app.get('/test', (req, res) => {
  res.send('typescript server');
});

app.listen(PORT, () => {
  console.log(`app running on port: ${PORT}`);
});
