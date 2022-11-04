import { inject, injectable } from 'tsyringe';
import {IUserDTO} from "../dtos/user.dto";
import { IUserRepository } from '../repositories/IUserRepository';
import UserRepository from "../infra/typeorm/repositories/UserRepository";

@injectable()
export default class ListUserService {
    constructor(
    @inject(UserRepository)
     private userRepository: IUserRepository,
    ) {}

    async execute(): Promise<IUserDTO[]> {
        return this.userRepository.list()
    }
}