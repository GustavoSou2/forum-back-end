import {IDefaultDTO} from "../../../shared/dtos/default.dto";

export interface IUserDTO extends IDefaultDTO{
    username: string;
    email: string;
    password: string;
    has_details: boolean;
}