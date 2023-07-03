import express from 'express';
import mongoose from 'mongoose';
import Cards from "./dbcards.js";
import Cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:b1TvO5AZaZ09AZUS@tc-cluster.cmzmt9u.mongodb.net/?retryWrites=true&w=majority'


// Middleware
app.use(express.json());
app.use(Cors());
// DB Config
mongoose.connect(connection_url)

// API Endpoints
app.get("/", (req, res) => res.status(200).send("HELLO!"));

app.post('/tinder/card', (req, res) => {
  const dbcard = req.body;
  Cards.create(dbcard)
      .then((data) => {
          res.status(201).send(data);
      })
      .catch((err) => {
          res.status(500).send(err);
      });
});


app.get('/tinder/card', (req, res) => {
    Cards.find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });
  

// Listener

app.listen(port, () => console.log(`Listening on port: ${port}`));