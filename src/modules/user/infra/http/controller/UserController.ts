import {container, injectable} from "tsyringe";
import {Request, Response} from "express";
import CreateUserService from "../../../service/CreateUserService";
import {IUserDTO} from "../../../dtos/user.dto";
import DeleteUserService from "../../../service/DeleteUserService";
import UpdateUserService from "../../../service/UpdateUserService";
import ListUserService from "../../../service/ListUserService";
import FindUserService from "../../../service/FindUserService";

@injectable()
export class UserController {
    async create(req: Request, res: Response): Promise<void> {
        const service = container.resolve(CreateUserService);

        const user: IUserDTO = req.body;

        res.status(201).json(await service.execute(user))
    }

    async delete(req: Request, res: Response): Promise<void> {
        const service = container.resolve(DeleteUserService);

        const { id } = req.params;

        res.status(201).json(await service.execute(id))
    }

    async update(req: Request, res: Response): Promise<void> {
        const service = container.resolve(UpdateUserService);

        const { id } = req.params;
        const data: IUserDTO = req.body;

        res.status(201).json(await service.execute(id, data))
    }

    async list(req: Request, res: Response): Promise<void> {
        const service = container.resolve(ListUserService);

        res.status(201).json(await service.execute())
    }

    async find(req: Request, res: Response): Promise<void> {
        const service = container.resolve(FindUserService);

        const { id } = req.params;

        res.status(201).json(await service.execute(id))
    }

}