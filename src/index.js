const express = require('express');

const app = express();

// catch undefined routes
app.get('*', (req, res) => {
  return res.send('no such route defined on the server');
});

app.listen(3000, () => {
  console.log('server running on port 3000');
});
