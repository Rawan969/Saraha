import mongoose, { Schema,model,Types } from "mongoose";

const messageSchema = new Schema({
    message:{
        type:String,
        required:true
    },
    receiverId:{
        type:Types.ObjectId,
        required:true
    },
},
{
    timestamps:true
})

const messageModel = mongoose.models.Message || model('Message',messageSchema); //the first condition to check if the User model is exit,if not it will create one
export default messageModel;