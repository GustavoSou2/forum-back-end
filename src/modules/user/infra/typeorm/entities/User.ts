import {Entity, Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import {DefaultEntity} from "../../../../../shared/typeorm/entities/default";
import {IUserDTO} from "../../../dtos/user.dto";

@Entity('users')
export class UserEntity extends DefaultEntity implements IUserDTO{
    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    has_details: boolean;

    constructor() {
        super();
        if (!this.id) {
            this.id = uuid();
        }
    }
}