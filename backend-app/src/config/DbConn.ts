import mongoose from 'mongoose';
const DATABASE_URI = process.env.DATABASE_URI
if(!DATABASE_URI){
  throw new Error("DATABASE_URI is not defined in the environment variables");

}
const DbConnect =async ()=>{
 try{

  console.log(DATABASE_URI)
   await mongoose.connect(DATABASE_URI);
 }
 catch(err){
    console.log(err)

 }
    
}
export default DbConnect;