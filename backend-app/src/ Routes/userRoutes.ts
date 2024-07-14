import { Router } from "express";
const router = Router()
import UserController from "../Controllers/UserController";


const {
    getAllUsers,
    getUserById,
    createUser,    
    updateUser,
    deleteUser
  } = UserController;
  
router.get('users/get', getAllUsers)
       .get('/:id/user', getUserById)
      .post('user/create',createUser)
      .patch('user/update', updateUser)
      .delete('user/delete', deleteUser)
