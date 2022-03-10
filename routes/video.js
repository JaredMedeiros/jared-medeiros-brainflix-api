const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

function readVideos() {
    const videoData = fs.readFileSync('./data/video.json');
    const parsedVideos = JSON.parse(videoData);
    return parsedVideos;
}

function writeVideos(data) {
    const stringifiedData = JSON.stringify(data);
    fs.writeFilesSync('./data/video.json', stringifiedData);
}

router.get('/', (req, res) => {
    const videos = readVideos();
    let fileteredVideos = videos;

    if ()
})