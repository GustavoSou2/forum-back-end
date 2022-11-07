import { inject, injectable } from 'tsyringe';
import {IPostDTO} from "../dtos/post.dto";
import { IPostRepository } from '../repositories/IPostRepository';
import UserRepository from "../infra/typeorm/repositories/PostRepository";

@injectable()
export default class UpdatePostService {
    constructor(
    @inject(UserRepository)
     private postRepository: IPostRepository,
    ) {}

    async execute(id: string, data: IPostDTO): Promise<void> {
        const alreadyById = await this.postRepository.find(id)
        if (!alreadyById) {
            throw new Error('Post not exists');
        }

        const user = this.postRepository.update(id, data)
    }
}