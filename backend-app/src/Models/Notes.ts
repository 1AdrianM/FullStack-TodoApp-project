import mongoose, {model, Schema, Document, Types } from "mongoose";
interface INotes extends Document{
    user:   Types.ObjectId;
    title: string;
    text:string;
    completed: boolean;
}
const NotesSchema = new Schema({

    user:{
  type: mongoose.Schema.Types.ObjectId,
  required:true,
  ref:'User'
    },
    title:{
        type:String,
        required:true


    },
    text:{
        type:String,
        required:true
    }
    , completed:{
        type:Boolean,
        default:false
    }
    
},{
    timestamps:true
}
)
export default model<INotes>('Notes', NotesSchema)