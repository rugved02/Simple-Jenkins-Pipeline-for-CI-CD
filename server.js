const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('🎉 Jenkins pipeline is working! 🎉');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
