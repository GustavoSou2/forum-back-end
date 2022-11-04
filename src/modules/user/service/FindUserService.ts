import { inject, injectable } from 'tsyringe';
import {IUserDTO} from "../dtos/user.dto";
import {appDataSource} from "../../../../ormconfig";
import { IUserRepository } from '../repositories/IUserRepository';
import UserRepository from "../infra/typeorm/repositories/UserRepository";

@injectable()
export default class FindUserService {
    constructor(
    @inject(UserRepository)
     private userRepository: IUserRepository,
    ) {}

    async execute(id: string): Promise<IUserDTO> {
        const alreadyById = await this.userRepository.find(id)
        if (!alreadyById) {
            throw new Error('User not exists');
        }

        return alreadyById
    }
}