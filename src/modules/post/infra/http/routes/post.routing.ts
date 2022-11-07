import { Router } from 'express';
import {PostController} from "../controller/PostController";
import { celebrate, Segments } from 'celebrate';
import createPostSchema from '../../../schema/createPost.schema';

const postRoutes = Router();

const postController = new PostController();

postRoutes.post(
    '', 
    celebrate({ [Segments.BODY]: createPostSchema }),
    postController.create)
postRoutes.get('', postController.list)
postRoutes.get('/:id', postController.find)
postRoutes.delete('/:id', postController.delete)
postRoutes.put('/:id', postController.update)

export { postRoutes }