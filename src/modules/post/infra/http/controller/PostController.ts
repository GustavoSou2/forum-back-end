import {container, injectable} from "tsyringe";
import {Request, Response} from "express";
import CreateUserService from "../../../service/CreatePostService";
import {IPostDTO} from "../../../dtos/post.dto";
import DeleteUserService from "../../../service/DeletePostService";
import UpdateUserService from "../../../service/UpdatePostService";
import ListUserService from "../../../service/ListPostService";
import FindUserService from "../../../service/FindPostService";
import CreatePostService from "../../../service/CreatePostService";
import DeletePostService from "../../../service/DeletePostService";
import UpdatePostService from "../../../service/UpdatePostService";
import ListPostService from "../../../service/ListPostService";
import FindPostService from "../../../service/FindPostService";

@injectable()
export class PostController {
    async create(req: Request, res: Response): Promise<void> {
        const service = container.resolve(CreatePostService);

        const user: IPostDTO = req.body;

        res.status(201).json(await service.execute(user))
    }

    async delete(req: Request, res: Response): Promise<void> {
        const service = container.resolve(DeletePostService);

        const { id } = req.params;

        res.status(201).json(await service.execute(id))
    }

    async update(req: Request, res: Response): Promise<void> {
        const service = container.resolve(UpdatePostService);

        const { id } = req.params;
        const data: IPostDTO = req.body;

        res.status(201).json(await service.execute(id, data))
    }

    async list(req: Request, res: Response): Promise<void> {
        const service = container.resolve(ListPostService);

        res.status(201).json(await service.execute())
    }

    async find(req: Request, res: Response): Promise<void> {
        const service = container.resolve(FindPostService);

        const { id } = req.params;

        res.status(201).json(await service.execute(id))
    }

  
}