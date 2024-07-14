import {Document, Schema} from "mongoose";
interface User extends Document{
    name:string;
    username:string
    email:string;
    password: string;
    role: string[]
    
}

export const UserScheme = new Schema({

name: {
    type: String,
    require:true

},
username:{
    type:String,
    require:true

},
email:{
    type: String,
    require:true

},
role:{
    type:[String],
    default:['user']
},
password:{
type:String ,   
require:true

},



})








module.exports