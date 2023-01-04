import { createError } from "../error.js"
import User from "../models/User.js"

// test fire
export const test = (req, res, next) => {
    res.json('It is working')
}

// Update user
export const update = async (req, res, next) => {
    if(req.params.id === req.user.id){
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
                {new: true}
            )
            res.status(200).json(updatedUser)
        } catch (err) {
            next(err)
        }
    }else {
        return next(createError(403,"You can update only your own account"))
    }
}

// Delete user
export const deleteUser = async (req, res, next) => {
    if(req.params.id === req.user.id){
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User deleted")
        } catch (err) {
            next(err)
        }
    }else {
        return next(createError(403,"You can delete only your own account"))
    }
}

// Find a user | checkout a channel
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

// Subscribe a channel
export const subscribe = async (req, res, next) => {
    try {
        await User.findById(req.user.id, {
            $push: { subscribedUsers: req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers : 1}
        })
        res.status(200).json("Subscribed Channel")
    } catch (err) {
        next(err)
    }
}

// Unsubscribe a channel
export const unsubscribe = async (req, res, next) => {
    try {
        await User.findById(req.user.id, {
            $pull: { subscribedUsers: req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers : -1}
        })
        res.status(200).json("Unsubscribed Channel")
    } catch (err) {
        next(err)
    }
}

// pending work
export const like = async (req, res, next) => {
    try {
        
    } catch (err) {
        next(err)
    }
}
export const dislike = async (req, res, next) => {
    try {
        
    } catch (err) {
        next(err)       
    }
}