const express = require('express');
const app = express()
const cors = require('cors');
const videoRoute = require ('./routes/video.js')

require('dotenv').config();
const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());

app.use('/videos', videoRoute);

app.listen(port, () => {
    console.log("Now listening on port" + port);
}); 