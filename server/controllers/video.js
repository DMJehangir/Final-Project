import { createError } from "../error.js";
import Video from "../models/Video.js";

// Upload
export const addVideo = async (req, res, next) => {
    const newVideo = new Video({userId: req.user.id, ...req.body});
    try {
        await newVideo.save();
        res.status(200).send('Video has been Uploaded')
    } catch (err) {
        next(err)
    }
}

// Update
export const updateVideo = async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
}

// Delete
export const deleteVideo = async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
}

// Get
export const getVideo = async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
}