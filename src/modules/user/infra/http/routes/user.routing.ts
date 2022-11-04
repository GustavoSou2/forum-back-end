import { Router } from 'express';
import {UserController} from "../controller/UserController";
import { celebrate, Segments } from 'celebrate';
import createUserSchema from '../../../schema/createUser.schema';

const userRoutes = Router();

const userController = new UserController();

userRoutes.post(
    '', 
    celebrate({ [Segments.BODY]: createUserSchema }),
    userController.create)
userRoutes.get('', userController.list)
userRoutes.post('/login', userController.authenticate)
userRoutes.get('/:id', userController.find)
userRoutes.delete('/:id', userController.delete)
userRoutes.put('/:id', userController.update)

export { userRoutes }