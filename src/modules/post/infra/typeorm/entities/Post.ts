import {Entity, Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import {DefaultEntity} from "../../../../../shared/infra/typeorm/entities/default";
import {IPostDTO} from "../../../dtos/post.dto";

@Entity('posts')
export class PostEntity extends DefaultEntity implements IPostDTO {
    @PrimaryColumn({ name: 'id_posts' })
    id!: string;

    @Column()
    title!: string;

    @Column()
    message!: string;

    @Column({ name: 'has_links' })
    has_links!: boolean;

    @Column({ name: 'has_tags' })
    has_tags!: boolean;

    @Column({ name: 'has_images' })
    has_images!: boolean;

    constructor() {
        super();
        if (!this.id) {
            this.id = uuid();
        }
    }
}