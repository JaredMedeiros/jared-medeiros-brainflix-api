const express = require('express');
const app = express()
const cors = require('cors');
const videoRoute = require ('./routes/videoRoute.js')

require('dotenv').config();


app.use(express.static('./public'));

app.use(cors());
app.use(express.json());

app.use('/videos', videoRoute);

const port = process.env.PORT || 5500;

app.listen(port, () => {
    console.log("Now listening on port" + port);
}); 