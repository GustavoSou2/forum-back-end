import { IPostDTO } from '../dtos/post.dto';

export interface IPostRepository {
    list(): Promise<IPostDTO[]>;
    delete(id: string): Promise<void>;
    create(data: IPostDTO): Promise<IPostDTO>;
    update(id:string, data: IPostDTO): Promise<void>;
    find(id:string): Promise<IPostDTO | null>;
}