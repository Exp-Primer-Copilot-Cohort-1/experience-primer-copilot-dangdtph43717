// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const comments = require('./comments.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// Get comments
app.get('/comments', (req, res) => {
  res.send(comments.getComments());
});

// Add comment
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.addComment(comment);
  res.send(comments.getComments());
});

app.listen(3000, () => {
  console.log('Server is running on 3000');
});