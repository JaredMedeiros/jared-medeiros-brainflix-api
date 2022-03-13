const fs = require('fs');
const uniqid = require('uniqid');

const filePath = './data/video-details.json';

function readVideos() {
    const videoFile = fs.readFileSync(filePath);
    const videoData = JSON.parse(videoFile);
    return videoData;
}

function writeVideos(data) {
    fs.writeFileSync(filePath, JSON.stringify(data));
}

const getAll = () => {
    return readVideos();
};

const getById = (id) => {
    const videoData = readVideos();
    return videoData.find((video) => 
    id === video.id);
};

const createOne = ({ title, description }) => {
    const videoData = readVideos();

    const newVideo = {
        id: uniqid(),
        title,
        channel: "My Channel",
        image: 'http://localhost:5500/images/Upload-video-preview.jpg',
        description,
        views: "0",
        likes: "0",
        duration: "2:02",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: new Date().getTime(),
        comments: [],
    };

    videoData.push(newVideo);
    writeVideos(videoData);
    return newVideo;
};

module.exports = {
    getAll,
    getById,
    createOne
}