import {Document,model, Schema} from "mongoose";

export interface IUser extends Document{
    name:string;
    username:string
    email:string;
    password: string;
    role: string[]
    
}

const UserScheme = new Schema({

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
export default model<IUser>('User', UserScheme)







module.exports