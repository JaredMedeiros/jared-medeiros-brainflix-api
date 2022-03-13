const videoModel = require('../Models/videoModel.js');

const getAll = (req, res) => {
    const videoData = videoModel.getAll();

    const strippedData = videoData.map((video) => {
        
        return {
            id : video.id,
            title: video.title,
            channel: video.channel,
            image: video.image
        }

    });

    res.json(strippedData);
}

const getOne = (req, res) => {
    const { id } = req.params;
    const foundVideo = videoModel.getById(id);

    if(!foundVideo) {
        return res.status(404).send('A video does not exist with the id of' + id);
    }

    res.json(foundVideo);
};

const createOne = (req, res) => {
    if (!req.body.title) {
        return res.status(400).send("Please include a title");
    }

    if (!req.body.description) {
        return res.status(400).send("Please include a description");
    }

    const newVideo = videoModel.createOne({
        title: req.body.title,
        descirption: req.body.description
    });

    res.status(201).json(newVideo);
};

module.exports = {
    getAll,
    getOne,
    createOne
};