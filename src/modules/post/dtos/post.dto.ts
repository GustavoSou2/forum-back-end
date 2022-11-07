import {IDefaultDTO} from "../../../shared/dtos/default.dto";

export interface IPostDTO extends IDefaultDTO{
    title: string;
    message: string;
    has_links: boolean;
    has_images: boolean;
    has_tags: boolean;
}