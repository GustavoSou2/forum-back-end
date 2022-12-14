import { inject, injectable } from 'tsyringe';
import {IUserDTO} from "../dtos/user.dto";
import { IUserRepository } from '../repositories/IUserRepository';
import UserRepository from "../infra/typeorm/repositories/UserRepository";

@injectable()
export default class DeleteUserService {
    constructor(
    @inject(UserRepository)
     private userRepository: IUserRepository,
    ) {}

    async execute(id: string): Promise<void> {
        const alreadyById = await this.userRepository.find(id)
        if (!alreadyById) {
            throw new Error('User not exists');
        }

        const user = this.userRepository.delete(id)
    }
}