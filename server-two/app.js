'use strict';
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/hello', (req, res) => {
  res.send('Hello Express!');
});

app.get('/catinfo', (req, res) => {
  const cat = {
    name: 'Frank',
    birthdate: '2010-12-25',
    weight: 5,
  };
  res.json(cat);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
