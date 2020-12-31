const express = require("express");
const port = 3003;
const app = express();
const db = require("../database/index.js");
const bodyParser = require("body-parser");
const cors = require('cors')
const path = require("path")

app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.get("/movies", (req, res) => {
  db.find((err, data) => {
    if (err) {
      res.sendStatus(400);
      res.send(err)
    } else {
      res.json(data);
    }
  });
});

app.post('/movies', (req, res) => {
  const {name, length, rating} = req.body;
// movie is a mongoose model object
  movie.insert([name, length, rating], (err, results) => {
    if (err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('from db: ', results );
      res.sendStatus(200)
    }
  })
})

app.listen(port, console.log(`listening on: ${port}`));
