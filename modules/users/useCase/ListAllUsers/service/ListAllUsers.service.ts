import { User } from "../../../model/User.ts";
import { UsersRepository } from "../../../repositories/Users.repository.ts";

export class ListAllUsersService {
    constructor(private usersRepository: UsersRepository) {}

    async execute(): Promise<User[]> {
        try{
            return await this.usersRepository.listAllUsers();
        }catch{
            return [];
        }
    }
}