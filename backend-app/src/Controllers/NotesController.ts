import Users from "../Models/Users";
import Notes from "../Models/Notes";
import { Response, Request } from "express";

const getNotes=async(req:Request, res:Response)=>{
const notes = await Notes.find().lean();
if(!notes.length){
    return res.status(400).json({message:'notes list not found'});
}
res.status(201).json(notes)

}
const createNote = async(req:Request, res:Response)=>{
const{ user,title,text,completed} = req.body
if(!user ||!title ||!text||!completed){
    return res.status(400).json({message:'Invalid inputs'})
}
try{
    const NoteObj ={user, title, text, completed}
const notes = await Notes.create(NoteObj);
res.status(201).json(notes);

}catch(err){
    res.status(400).json(err)
    console.log(err);

}
}
const updateNote = async (req:Request, res:Response)=>{

}
const deleteNote = async(req:Request, res:Response)=>{

}