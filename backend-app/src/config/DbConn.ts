import mongoose from 'mongoose';
const DATABASE_URI:string = 'ffff';
const DbConnect =async ()=>{
 try{
   await mongoose.connect(DATABASE_URI);
 }
 catch(err){
    console.log(err)

 }
    
}