import { inject, injectable } from 'tsyringe';
import {IUserDTO} from "../dtos/user.dto";
import { IUserRepository } from '../repositories/IUserRepository';
import * as bcrypt from 'bcrypt';
import UserRepository from '../infra/typeorm/repositories/UserRepository';
import { ITokenManagerProvider } from '../../../shared/providers/ITokenManagerProvider';
import { JwtTokenManagerProvider } from '../../../shared/providers/TokeManagerProvider/TokenManagerProvider';
import { config } from 'dotenv-flow';

interface IAuthentication {
    token: string;
}

config({ silent: true });

@injectable()
export default class AuthenticationService {
    constructor (
    @inject(UserRepository)
     private userRepository: IUserRepository,
     @inject(JwtTokenManagerProvider)
    private tokenManagerProvider: ITokenManagerProvider,
    ) {}

    async execute({ email, password }): Promise<IAuthentication> {
        const alreadyByUsername = await this.userRepository.findByEmail(email)

        if (!alreadyByUsername) {
            throw new Error('User not exists');
        }

        const _password = await bcrypt.hash(password, 8)

        const passwordMatch =  await bcrypt.compare(password, alreadyByUsername.password);

        if (!passwordMatch) {
            throw new Error('Password incorrect')
        }

        return {
            token: await this.tokenManagerProvider.sign({}, 'secrete', {
                subject: alreadyByUsername.id,
                expiresIn: '1d',
              })
        };
    }
}