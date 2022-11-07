import { inject, injectable } from 'tsyringe';
import {IPostDTO} from "../dtos/post.dto";
import { IPostRepository } from '../repositories/IPostRepository';
import PostRepository from '../infra/typeorm/repositories/PostRepository';

@injectable()
export default class ListPostService {
    constructor(
    @inject(PostRepository)
     private postRepository: IPostRepository,
    ) {}

    async execute(): Promise<IPostDTO[]> {
        return this.postRepository.list()
    }
}