import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            lowerCase: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowerCase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        avatar: {
            type: String, //claoudinary url
            required: true,

        },
        coverImage: {
            type: String, // caludinary url
        },
        watchHistory: [{
            type:Schema.Types.ObjectId,
            ref: "Video"
        }],
        password:{
            type
        }
    }
);


export const User = mongoose.model("User", userSchema)