const express = require('express');
const app = express();
const cors = require('cors');

app,use(express.static('./public'))

app.use((req, res, next) => {
    console.log(`Incoming request for path ${req.path}`);
    next();
});

app.use((req, res, next) => {
    if (
        req.method === 'POST' &&
        req.headers['content-type'] !== 'application/json'
    ) {
        return res.status(400).json()({
            message: 'POST requests must contani content-type=application/json',
        });
    } else {
        next();
    }
});

app.use(cors());

app.use(express.json());

app.use(/*api route*/, videoRoutes)

const SERVER_PORT = 5500;

app.listen(SEREVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`);
});