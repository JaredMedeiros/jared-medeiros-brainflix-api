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
    const videoPhoto = './public/images/upload-video-preview.jpg'

    const newVideo = {
        id: uniqid(),
        title,
        channel: "My Channel",
        image: videoPhoto,
        description,
        views: "2,343,243",
        likes: "2",
        duration: "2:02",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: new Date().getTime(),
        comments: [
            {
                name: "Jared Medeiros",
                comment: "Pretty good video",
                id: uniqid(),
                likes: 0,
                timestamp: new Date().getTime(),
            },
        ],
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