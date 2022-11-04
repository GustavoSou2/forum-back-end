import { inject, injectable } from 'tsyringe';
import {IUserDTO} from "../dtos/user.dto";
import {appDataSource} from "../../../../ormconfig";
import { IUserRepository } from '../repositories/IUserRepository';
import UserRepository from "../infra/typeorm/repositories/UserRepository";

@injectable()
export default class CreateUserService {
    constructor(
    @inject(UserRepository)
     private userRepository: IUserRepository,
    ) {}

    async execute({ username, email, password }: IUserDTO): Promise<IUserDTO> {
        const alreadyByUsername = await this.userRepository.findByUsername(username)
        if (alreadyByUsername) {
            throw new Error('User already exists');
        }

        const alreadyByEmail = await this.userRepository.findByEmail(email)
        if (alreadyByEmail) {
            throw new Error('Email already in use');
        }

        const user = this.userRepository.create({ username, email, password, has_details: false  })
        return user;
    }
}