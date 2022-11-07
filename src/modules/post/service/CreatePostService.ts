import { inject, injectable } from 'tsyringe';
import {IPostDTO} from "../dtos/post.dto";
import { IPostRepository } from '../repositories/IPostRepository';
import PostRepository from '../infra/typeorm/repositories/PostRepository';

@injectable()
export default class CreatePostService {
    constructor(
    @inject(PostRepository)
     private postRepository: IPostRepository,
    ) {}
    
    async execute({ title, message, has_links, has_images, has_tags }: IPostDTO): Promise<IPostDTO> {
        const post = this.postRepository.create({ title, message, has_links, has_images, has_tags  })
        return post;
    }
}