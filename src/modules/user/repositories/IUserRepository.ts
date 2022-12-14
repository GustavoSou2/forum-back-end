import { IUserDTO } from '../dtos/user.dto';

export interface IUserRepository {
    list(): Promise<IUserDTO[]>;
    delete(id: string): Promise<void>;
    create(data: IUserDTO): Promise<IUserDTO>;
    update(id:string, data: IUserDTO): Promise<void>;
    find(id:string): Promise<IUserDTO | null>;
    findByUsername(username:string): Promise<IUserDTO  | null>;
    findByEmail(email:string): Promise<IUserDTO  | null>;
}