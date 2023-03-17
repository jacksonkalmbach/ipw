const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const schema = new mongoose.Schema({
  name: String,
  age: Number,
});

const MyModel = mongoose.model('MyModel', schema);

app.get('/api/mymodel', async (req, res) => {
  const data = await MyModel.find();
  res.json(data);
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
