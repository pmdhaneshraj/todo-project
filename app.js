const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js')

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));

const items = ["Buy Food", "Cook Food", "Eat Food"];

app.get('/', (req, res) => {

  const day = date.getDate();

  res.render("list", { kindOfDay: day, newItemList: items });
});

app.post('/', (req, res) => {
  const item = req.body.newItem;
  if (item !== "") {
    items.push(item);
    res.redirect('/');
  }
})

app.listen(3000, () => {
  console.log('server up and running in port 3000...');
});