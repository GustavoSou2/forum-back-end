import { Router } from 'express';
import {UserController} from "../controller/UserController";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post('', userController.create)
userRoutes.get('', userController.list)
userRoutes.get('/:id', userController.find)
userRoutes.delete('/:id', userController.delete)
userRoutes.put('/:id', userController.update)

export { userRoutes }