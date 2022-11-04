import { Repository } from 'typeorm';
import dataSource from '../../../../../shared/typeorm';
import { IUserDTO } from '../../../dtos/user.dto';
import { IUserRepository } from './../../../repositories/IUserRepository';
import { injectable } from 'tsyringe';
import {UserEntity} from "../entities/User";

@injectable() 
export default class UserRepository implements IUserRepository {
    private repo: Repository<UserEntity>;

    constructor() {
        this.repo = dataSource.getRepository(UserEntity);
    }

    list(): Promise<IUserDTO[]> {
        return this.repo.find();
    }

    create(data: IUserDTO): Promise<IUserDTO> {
        const newUser = this.repo.create(data);
        return this.repo.save(newUser);
    }

    find(id: string): Promise<IUserDTO> {
        return this.repo.findOneBy({ id });
    }

    findByUsername(username: string): Promise<IUserDTO> {
        return this.repo.findOneBy({ username });
    }

    findByEmail(email: string): Promise<IUserDTO> {
        return this.repo.findOneBy({ email });
    }

    async update(id: string, data: IUserDTO): Promise<void> {
        await this.repo.update(id, data);
    }

    async delete(id: string): Promise<void> {
        await this.repo.softDelete(id)
    }
    
}