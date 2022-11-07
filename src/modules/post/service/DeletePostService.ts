import { inject, injectable } from 'tsyringe';
import { IPostRepository } from '../repositories/IPostRepository';
import PostRepository from '../infra/typeorm/repositories/PostRepository';

@injectable()
export default class DeletePostService {
    constructor(
    @inject(PostRepository)
     private postRepository: IPostRepository,
    ) {}

    async execute(id: string): Promise<void> {
        const alreadyById = await this.postRepository.find(id)
        if (!alreadyById) {
            throw new Error('Post not exists');
        }

        const post = this.postRepository.delete(id)
    
    }
}