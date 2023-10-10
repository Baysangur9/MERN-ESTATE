import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    username:{
        type:String,
        requireq: true,
        unique:true,
    },
    email:{
        type:String,
        requireq:true,
        unique:true,
    },
    password:{
        type:String,
        requireq:true
    }
},{timestamps:true})

const User =mongoose.model(User, userShema);

export default User;