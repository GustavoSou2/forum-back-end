import { inject, injectable } from 'tsyringe';
import {IPostDTO} from "../dtos/post.dto";
import { IPostRepository } from '../repositories/IPostRepository';
import PostRepository from '../infra/typeorm/repositories/PostRepository';

@injectable()
export default class FindPostService {
    constructor(
    @inject(PostRepository)
     private postRepository: IPostRepository,
    ) {}

    async execute(id: string): Promise<IPostDTO> {
        const alreadyById = await this.postRepository.find(id)
        if (!alreadyById) {
            throw new Error('Post not exists');
        }

        return alreadyById
    }
}