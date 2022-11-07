import { Repository } from 'typeorm';
import dataSource from '../../../../../shared/infra/typeorm';
import { IPostDTO } from '../../../dtos/post.dto';
import { IPostRepository } from '../../../repositories/IPostRepository';
import { injectable } from 'tsyringe';
import {PostEntity} from "../entities/Post";

@injectable() 
export default class PostRepository implements IPostRepository {
    private repo: Repository<PostEntity>;

    constructor() {
        this.repo = dataSource.getRepository(PostEntity);
    }

    list(): Promise<IPostDTO[]> {
        return this.repo.find();
    }

    create(data: IPostDTO): Promise<IPostDTO> {
        const newUser = this.repo.create(data);
        return this.repo.save(newUser);
    }

    find(id: string): Promise<IPostDTO | null> {
        return this.repo.findOneBy({ id }) ;
    }

    async update(id: string, data: IPostDTO): Promise<void> {
        await this.repo.update(id, data);
    }

    async delete(id: string): Promise<void> {
        await this.repo.softDelete(id)
    }
    
}