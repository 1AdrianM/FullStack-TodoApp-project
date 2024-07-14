import { Response, Request } from "express";
import Users from "../Models/Users"
import bcrypt from 'bcrypt'

const getAllUsers =async(req:Request, res:Response)=>{

const user = await Users.find().lean();
if(user.length == 0){
    res.status(400).json({message: 'Users not Found'})
}
const response = res.status(201).json(user)
return response;
}

const CreateUser =async (req:Request, res:Response)=>{
const {name, username, email, password}= req.body

if(!name || !username || !email|| !password) res.status(400).json({message:'invalid inputs'})
try{
  const hashed_password = await bcrypt.hash(password, 10);  
const userObj ={name: name , username: username, email: email, password:hashed_password}

const createdUser = await Users.create(userObj);
res.status(201).json(createdUser);
}
catch(err){
res.status(500).json({message: 'Internal server error has ocurred'})
}



}
const getUserById =async(req: Request, res: Response)=>{
const {id} = req.body.id;
if(!id) res.status(400).json({message: 'Id not found'})
    try{
const user = await Users.findById(id);

res.status(201).json(user);
}catch(err){
    res.status(400).json({message:'unable to find User'})
    console.log(err);

}
}
const updateUser =async(req:Request, res: Response)=>{
const {name, username, email, password} = req.body
}
const deleteUser =async(req:Request, res:Response)=>{
const{id} = req.body.id

}
